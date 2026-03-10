<template>
  <div class="essay-view">
    <h1>文书写作</h1>
    <p class="subtitle">上传您的CV，自动生成个性化的英文个人陈述</p>
    
    <div class="form-container">
      <div class="form-group">
        <label>上传CV *</label>
        <div class="file-upload">
          <input 
            type="file" 
            accept=".pdf,.docx" 
            @change="handleFileUpload"
            id="cv-file"
          />
          <label for="cv-file" class="file-label">
            <span v-if="!cvFile">点击选择文件 (PDF或DOCX)</span>
            <span v-else>{{ cvFile.name }}</span>
          </label>
        </div>
        <p class="file-hint">支持 PDF 或 DOCX 格式，最大 10MB</p>
      </div>
      
      <div class="form-group">
        <label>目标学校（可选）</label>
        <input 
          v-model="form.targetSchool" 
          type="text" 
          placeholder="例如：MIT, Stanford, Oxford"
        />
      </div>
      
      <div class="form-group">
        <label>目标专业 *</label>
        <input 
          v-model="form.targetMajor" 
          type="text" 
          placeholder="例如：Computer Science, Engineering, Business"
        />
      </div>
      
      <div class="form-group">
        <label>字数范围</label>
        <div class="word-count-options">
          <select v-model="form.wordCount">
            <option :value="300">300字以内</option>
            <option :value="400">400字以内</option>
            <option :value="500">500字以内</option>
            <option :value="600">600字以内</option>
            <option :value="800">800字以内</option>
          </select>
        </div>
      </div>
      
      <div class="form-group">
        <label>其他文书要求（可选）</label>
        <textarea 
          v-model="form.additionalRequirements" 
          placeholder="输入任何特殊要求，例如：需要突出领导力、强调科研经历等"
          rows="3"
        ></textarea>
      </div>
      
      <button class="submit-btn" @click="generateEssay" :disabled="loading">
        {{ loading ? '生成中...' : '生成个人陈述' }}
      </button>
    </div>
    
    <div v-if="error" class="error-message">{{ error }}</div>
    
    <div v-if="generatedEssay" class="result-container">
      <h2>生成的个人陈述</h2>
      <div class="essay-content">
        <p>{{ generatedEssay }}</p>
      </div>
      <div class="essay-actions">
        <button class="copy-btn" @click="copyEssay">复制内容</button>
      </div>
      <p v-if="copied" class="copy-success">已复制到剪贴板</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EssayView',
  data() {
    return {
      cvFile: null,
      form: {
        targetSchool: '',
        targetMajor: '',
        wordCount: 400,
        additionalRequirements: ''
      },
      loading: false,
      error: '',
      generatedEssay: '',
      copied: false
    }
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0]
      if (!file) return
      
      const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        this.error = '请上传 PDF 或 DOCX 格式的文件'
        return
      }
      
      if (file.size > 10 * 1024 * 1024) {
        this.error = '文件大小不能超过 10MB'
        return
      }
      
      this.cvFile = file
      this.error = ''
    },
    async generateEssay() {
      if (!this.cvFile) {
        this.error = '请上传CV文件'
        return
      }
      
      if (!this.form.targetMajor.trim()) {
        this.error = '请输入目标专业'
        return
      }
      
      this.loading = true
      this.error = ''
      this.generatedEssay = ''
      
      try {
        const formData = new FormData()
        formData.append('cv', this.cvFile)
        formData.append('targetSchool', this.form.targetSchool)
        formData.append('targetMajor', this.form.targetMajor)
        formData.append('wordCount', this.form.wordCount)
        formData.append('additionalRequirements', this.form.additionalRequirements)
        
        const response = await axios.post('/api/essay/generate', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        this.generatedEssay = response.data.essay
      } catch (err) {
        this.error = err.response?.data?.message || '生成失败，请稍后重试'
      } finally {
        this.loading = false
      }
    },
    copyEssay() {
      navigator.clipboard.writeText(this.generatedEssay).then(() => {
        this.copied = true
        setTimeout(() => {
          this.copied = false
        }, 2000)
      })
    }
  }
}
</script>

<style scoped>
.essay-view {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.form-container {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: #667eea;
}

.file-upload {
  position: relative;
}

.file-upload input[type="file"] {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
}

.file-label {
  display: block;
  padding: 1rem;
  border: 2px dashed #ddd;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.3s;
}

.file-label:hover {
  border-color: #667eea;
}

.file-hint {
  font-size: 0.85rem;
  color: #999;
  margin-top: 0.5rem;
}

.word-count-options select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: opacity 0.3s;
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.9;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #fee;
  color: #c33;
  border-radius: 8px;
  text-align: center;
}

.result-container {
  margin-top: 2rem;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.result-container h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.essay-content {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1rem;
}

.essay-content p {
  white-space: pre-wrap;
}

.essay-actions {
  display: flex;
  justify-content: flex-end;
}

.copy-btn {
  padding: 0.5rem 1.5rem;
  background: #667eea;
  color: white;
  border-radius: 6px;
  font-weight: 500;
}

.copy-success {
  text-align: right;
  color: #28a745;
  margin-top: 0.5rem;
}
</style>
