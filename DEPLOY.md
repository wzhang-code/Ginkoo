# Ginkoo 项目部署文档

## 部署架构

- 前端：Vercel
- 后端：阿里云函数计算（FC）

---

## 一、前端部署（Vercel）

### 1. 创建 Vercel 项目
1. 登录 [vercel.com](https://vercel.com)
2. 点击「Add New...」→ 「Project」
3. 选择 GitHub 仓库 `wzhang-code/Ginkoo`
4. 配置：
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. 点击「Deploy」

### 2. 修改 Git 仓库连接（如需要）
如 Vercel 创建了新仓库而非使用主仓库：
1. 进入项目 → Settings → Git
2. 修改 Connected Repository 为 `wzhang-code/Ginkoo`

---

## 二、后端部署（阿里云函数计算）

### 1. 安装 Serverless Devs CLI

```bash
npm install -g @serverless-devs/s
```

### 2. 配置阿里云凭据

```bash
s config add --AccessKeyID <你的AccessKeyID> --AccessKeySecret <你的AccessKeySecret> -a default
```

### 3. 创建函数计算代码

在 `backend/index.js` 中编写适配函数计算的代码：

```javascript
const OpenAI = require('openai');

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com/v1',
  apiKey: 'your-api-key'
});

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

function setResponseHeaders(response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.setHeader('Content-Type', 'application/json');
}

async function handler(request, response, context) {
  const method = request.method;
  const path = request.path;
  
  if (method === 'OPTIONS') {
    response.setStatusCode(200);
    setResponseHeaders(response);
    response.send('');
    return;
  }
  
  // API 路由处理...
  // ...
}

exports.handler = handler;
```

### 4. 创建 s.yaml 配置文件

```yaml
edition: 1.0.0
name: ginkoo-backend
services:
  ginkoo:
    component: fc
    props:
      region: cn-hangzhou
      service:
        name: ginkoo
        description: Ginkoo Backend API
      function:
        name: api
        runtime: nodejs18
        codeUri: .
        handler: index.handler
        timeout: 60
        memorySize: 1024
      triggers:
        - name: httpTrigger
          type: http
          config:
            authType: anonymous
            methods:
              - GET
              - POST
            path: /.*
```

### 5. 部署后端

```bash
cd backend
npm install
s deploy --access default
```

部署成功后会显示后端 URL，格式如：
```
https://api-ginkoo-xxx.cn-hangzhou.fcapp.run
```

---

## 三、配置前端连接后端

### 1. 创建生产环境配置

创建 `frontend/.env.production`：

```
VITE_API_BASE=https://你的后端URL
```

### 2. 修改 vite.config.js

```javascript
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_API_BASE || 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
})
```

---

## 四、Vercel 配置文件

在项目根目录创建 `vercel.json`：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

在 frontend 目录创建 `frontend/vercel.json`：

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## 五、完整部署流程

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "feat: 部署配置"
   git push
   ```

2. **部署后端到阿里云**
   ```bash
   cd backend
   s deploy --access default
   ```

3. **更新前端 .env.production**（后端 URL）

4. **推送前端配置**
   ```bash
   git add .
   git commit -m "chore: 更新后端配置"
   git push
   ```

5. **Vercel 自动部署**

---

## 六、注意事项

1. 阿里云 AccessKey 建议定期更换
2. DeepSeek API Key 不要提交到 GitHub
3. Vercel 部署时确保连接到正确的 GitHub 仓库
