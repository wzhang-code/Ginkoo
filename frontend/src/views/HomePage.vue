<template>
  <div class="home-page">
    <div class="hero">
      <h1>欢迎来到 Ginkoo.org</h1>
      <p>您的专业留学咨询平台</p>
    </div>
    <div class="modules">
      <div class="module-card" @click="$router.push('/research')">
        <div class="module-icon">📚</div>
        <h3>学生定制化研究项目建议</h3>
        <p>根据您的专业方向和个人背景，获取定制化的研究项目建议</p>
      </div>
      <div class="module-card" @click="$router.push('/competition')">
        <div class="module-icon">🏆</div>
        <h3>竞赛百科书</h3>
        <p>查询各学科国际高中竞赛的详细信息、历年题目和解答</p>
      </div>
      <div class="module-card" @click="$router.push('/major')">
        <div class="module-icon">🎓</div>
        <h3>大学专业咨询</h3>
        <p>了解目标专业的高中科目要求、大学课程、就业方向等信息</p>
      </div>
      <div class="module-card" @click="$router.push('/essay')">
        <div class="module-icon">✍️</div>
        <h3>文书写作</h3>
        <p>上传您的CV，自动生成个性化的英文个人陈述</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 3rem 0;
}

.hero h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: #666;
}

.modules {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.module-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.module-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.module-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.module-card h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.module-card p {
  color: #666;
  font-size: 0.9rem;
}
</style>
