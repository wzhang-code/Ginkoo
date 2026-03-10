<template>
  <div class="major-view">
    <h1>大学专业咨询</h1>
    <p class="subtitle">输入目标专业，了解所需高中科目、大学课程、就业方向等信息</p>
    
    <div class="search-container">
      <div class="search-box">
        <input 
          v-model="searchMajor" 
          type="text" 
          placeholder="输入专业名称，例如：计算机科学、工程、商科、医学"
          @keyup.enter="searchMajorInfo"
        />
        <button class="search-btn" @click="searchMajorInfo" :disabled="loading">
          {{ loading ? '查询中...' : '查询' }}
        </button>
      </div>
      
      <div class="quick-links">
        <span>热门专业：</span>
        <button v-for="major in majors" :key="major" @click="selectMajor(major)" class="quick-btn">
          {{ major }}
        </button>
      </div>
    </div>
    
    <div v-if="error" class="error-message">{{ error }}</div>
    
    <div v-if="majorInfo" class="major-detail">
      <h2>{{ majorInfo.name }}</h2>
      
      <div class="info-grid">
        <div class="info-card">
          <h4>📚 高中必学科目</h4>
          <ul>
            <li v-for="(subject, index) in majorInfo.requiredSubjects" :key="index">{{ subject }}</li>
          </ul>
        </div>
        
        <div class="info-card">
          <h4>🎓 典型大学课程</h4>
          <ul>
            <li v-for="(course, index) in majorInfo.typicalCourses" :key="index">{{ course }}</li>
          </ul>
        </div>
        
        <div class="info-card">
          <h4>💼 就业方向</h4>
          <ul>
            <li v-for="(direction, index) in majorInfo.employmentDirections" :key="index">{{ direction }}</li>
          </ul>
        </div>
        
        <div class="info-card">
          <h4>🏢 相关知名公司</h4>
          <ul>
            <li v-for="(company, index) in majorInfo.knownCompanies" :key="index">{{ company }}</li>
          </ul>
        </div>
      </div>
      
      <div class="info-card full-width">
        <h4>🔬 典型研究领域</h4>
        <ul>
          <li v-for="(area, index) in majorInfo.researchAreas" :key="index">{{ area }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MajorView',
  data() {
    return {
      searchMajor: '',
      majors: ['计算机科学', '工程', '商科', '医学', '经济学', '物理学', '化学', '生物学', '数学', '心理学'],
      loading: false,
      error: '',
      majorInfo: null
    }
  },
  methods: {
    async searchMajorInfo() {
      if (!this.searchMajor.trim()) {
        this.error = '请输入专业名称'
        return
      }
      
      this.loading = true
      this.error = ''
      this.majorInfo = null
      
      try {
        const response = await axios.get(`/api/major/${encodeURIComponent(this.searchMajor)}`)
        this.majorInfo = response.data
      } catch (err) {
        if (err.response?.status === 404) {
          this.error = '未找到该专业的信息'
        } else {
          this.error = err.response?.data?.message || '查询失败，请稍后重试'
        }
      } finally {
        this.loading = false
      }
    },
    selectMajor(major) {
      this.searchMajor = major
      this.searchMajorInfo()
    }
  }
}
</script>

<style scoped>
.major-view {
  max-width: 1000px;
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

.search-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.search-box {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.search-box input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

.search-box input:focus {
  border-color: #667eea;
}

.search-btn {
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  border-radius: 8px;
}

.search-btn:disabled {
  opacity: 0.6;
}

.quick-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.quick-links span {
  color: #666;
}

.quick-btn {
  padding: 0.4rem 1rem;
  background: #f0f0f0;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #333;
  transition: background 0.3s;
}

.quick-btn:hover {
  background: #e0e0e0;
}

.error-message {
  padding: 1rem;
  background: #fee;
  color: #c33;
  border-radius: 8px;
  text-align: center;
}

.major-detail {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.major-detail h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.info-card {
  background: #f9f9f9;
  border-radius: 10px;
  padding: 1.5rem;
}

.info-card.full-width {
  grid-column: 1 / -1;
}

.info-card h4 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.info-card ul {
  list-style: none;
}

.info-card li {
  color: #666;
  padding: 0.4rem 0;
  border-bottom: 1px solid #eee;
}

.info-card li:last-child {
  border-bottom: none;
}
</style>
