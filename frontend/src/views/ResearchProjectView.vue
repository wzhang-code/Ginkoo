<template>
  <div class="research-view">
    <h1>学生定制化研究项目建议</h1>
    <p class="subtitle">输入您的专业方向和个人背景，获取4个定制化的研究项目建议</p>
    
    <div class="form-container">
      <div class="form-group">
        <label>Target Major *</label>
        <select v-model="form.majorDirection">
          <option value="" disabled>Select your target major</option>
          <option v-for="major in majorList" :key="major" :value="major">{{ major }}</option>
        </select>
      </div>
      
      <div class="form-group">
        <label>个人背景</label>
        <textarea 
          v-model="form.personalBackground" 
          placeholder="请简要介绍您的学术背景、已完成的项目等"
          rows="3"
        ></textarea>
      </div>
      
      <div class="form-group">
        <label>爱好</label>
        <input 
          v-model="form.hobbies" 
          type="text" 
          placeholder="例如：编程、阅读、音乐"
        />
      </div>
      
      <div class="form-group">
        <label>习惯/特点</label>
        <input 
          v-model="form.habits" 
          type="text" 
          placeholder="例如：喜欢独立思考、善于团队协作"
        />
      </div>
      
      <button class="submit-btn" @click="generateSuggestions" :disabled="loading">
        {{ loading ? '生成中...' : '生成研究项目建议' }}
      </button>
    </div>
    
    <div v-if="error" class="error-message">{{ error }}</div>
    
    <div v-if="suggestions.length > 0" class="results">
      <h2>为您推荐的研究项目</h2>
      <div class="suggestions-grid">
        <div v-for="(suggestion, index) in suggestions" :key="index" class="suggestion-card">
          <div class="card-header">
            <span class="card-number">{{ index + 1 }}</span>
            <h3>{{ suggestion.title }}</h3>
          </div>
          <p class="description">{{ suggestion.description }}</p>
          <div class="card-section">
            <strong>所需技能：</strong>
            <ul>
              <li v-for="(skill, i) in suggestion.requiredSkills" :key="i">{{ skill }}</li>
            </ul>
          </div>
          <div class="card-section">
            <strong>预期成果：</strong>
            <p>{{ suggestion.expectedOutcomes }}</p>
          </div>
          <div class="card-section">
            <strong>推荐时间线：</strong>
            <p>{{ suggestion.timeline }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ResearchProjectView',
  data() {
    return {
      form: {
        majorDirection: '',
        personalBackground: '',
        hobbies: '',
        habits: ''
      },
      majorList: [
        'Accounting',
        'Aerospace Engineering',
        'Agricultural Science',
        'Architecture',
        'Artificial Intelligence',
        'Biochemistry',
        'Biology',
        'Biomedical Engineering',
        'Business Administration',
        'Chemical Engineering',
        'Chemistry',
        'Civil Engineering',
        'Cognitive Science',
        'Computer Engineering',
        'Computer Science',
        'Data Science',
        'Economics',
        'Electrical Engineering',
        'Environmental Engineering',
        'Environmental Science',
        'Finance',
        'Genetics',
        'Geology',
        'History',
        'Information Systems',
        'Journalism',
        'Law',
        'Linguistics',
        'Marketing',
        'Materials Science',
        'Mathematics',
        'Mechanical Engineering',
        'Medicine',
        'Microbiology',
        'Neuroscience',
        'Nursing',
        'Philosophy',
        'Physics',
        'Political Science',
        'Psychology',
        'Public Health',
        'Robotics',
        'Software Engineering',
        'Statistics',
        'Sustainable Energy'
      ],
      loading: false,
      error: '',
      suggestions: []
    }
  },
  methods: {
    async generateSuggestions() {
      if (!this.form.majorDirection) {
        this.error = '请选择目标专业方向'
        return
      }
      
      this.loading = true
      this.error = ''
      this.suggestions = []
      
      try {
        const response = await axios.post('/api/research/suggest', this.form)
        this.suggestions = response.data.suggestions
      } catch (err) {
        this.error = err.response?.data?.message || '生成失败，请稍后重试'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.research-view {
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
  transition: border-color 0.3s;
  background: white;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: #667eea;
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

.results {
  margin-top: 2rem;
}

.results h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.suggestions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
}

.suggestion-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.card-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.card-header h3 {
  color: #2c3e50;
  font-size: 1.1rem;
}

.description {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.card-section {
  margin-bottom: 0.75rem;
}

.card-section strong {
  color: #333;
}

.card-section ul {
  margin-left: 1.5rem;
  color: #666;
}

.card-section p {
  color: #666;
  margin-top: 0.25rem;
}
</style>
