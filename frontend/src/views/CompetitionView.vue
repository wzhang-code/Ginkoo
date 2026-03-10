<template>
  <div class="competition-view">
    <h1>竞赛百科书</h1>
    <p class="subtitle">输入目标学科，查询国际高中学科竞赛的详细信息</p>
    
    <div class="search-container">
      <div class="search-box">
        <input 
          v-model="searchSubject" 
          type="text" 
          placeholder="输入学科名称，例如：数学、物理、化学、生物、计算机"
          @keyup.enter="searchCompetitions"
        />
        <button class="search-btn" @click="searchCompetitions" :disabled="loading">
          {{ loading ? '搜索中...' : '搜索' }}
        </button>
      </div>
      
      <div class="quick-links">
        <span>快速选择：</span>
        <button v-for="subject in subjects" :key="subject" @click="selectSubject(subject)" class="quick-btn">
          {{ subject }}
        </button>
      </div>
    </div>
    
    <div v-if="error" class="error-message">{{ error }}</div>
    
    <div v-if="competitions.length > 0" class="results">
      <div class="competition-list">
        <div 
          v-for="competition in competitions" 
          :key="competition.id" 
          class="competition-card"
          @click="selectCompetition(competition)"
        >
          <h3>{{ competition.name }}</h3>
          <p class="organizer">主办方：{{ competition.organizer }}</p>
          <p class="format">形式：{{ competition.format }}</p>
        </div>
      </div>
    </div>
    
    <div v-if="selectedCompetition" class="competition-detail">
      <button class="back-btn" @click="selectedCompetition = null">返回列表</button>
      <h2>{{ selectedCompetition.name }}</h2>
      
      <div class="detail-section">
        <h4>基本信息</h4>
        <p><strong>主办方：</strong>{{ selectedCompetition.organizer }}</p>
        <p><strong>比赛形式：</strong>{{ selectedCompetition.format }}</p>
        <p><strong>关键日期：</strong>{{ selectedCompetition.dates }}</p>
        <p><strong>参赛资格：</strong>{{ selectedCompetition.eligibility }}</p>
      </div>
      
      <div class="detail-section">
        <h4>知识范围</h4>
        <ul>
          <li v-for="(scope, index) in selectedCompetition.knowledgeScope" :key="index">{{ scope }}</li>
        </ul>
      </div>
      
      <div v-if="selectedCompetition.pastPapers && selectedCompetition.pastPapers.length > 0" class="detail-section">
        <h4>历年题目</h4>
        <div v-for="paper in selectedCompetition.pastPapers" :key="paper.year" class="paper-item">
          <p><strong>{{ paper.year }}年</strong></p>
          <p>{{ paper.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CompetitionView',
  data() {
    return {
      searchSubject: '',
      subjects: ['数学', '物理', '化学', '生物', '计算机'],
      loading: false,
      error: '',
      competitions: [],
      selectedCompetition: null
    }
  },
  methods: {
    async searchCompetitions() {
      if (!this.searchSubject.trim()) {
        this.error = '请输入学科名称'
        return
      }
      
      this.loading = true
      this.error = ''
      this.selectedCompetition = null
      
      try {
        const response = await axios.get('/api/competition/search', {
          params: { subject: this.searchSubject }
        })
        this.competitions = response.data.competitions
        if (this.competitions.length === 0) {
          this.error = '未找到该学科的竞赛信息'
        }
      } catch (err) {
        this.error = err.response?.data?.message || '搜索失败，请稍后重试'
      } finally {
        this.loading = false
      }
    },
    selectSubject(subject) {
      this.searchSubject = subject
      this.searchCompetitions()
    },
    selectCompetition(competition) {
      this.selectedCompetition = competition
    }
  }
}
</script>

<style scoped>
.competition-view {
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

.competition-list {
  display: grid;
  gap: 1rem;
}

.competition-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.competition-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.competition-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.competition-card p {
  color: #666;
  font-size: 0.9rem;
  margin: 0.25rem 0;
}

.competition-detail {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.back-btn {
  padding: 0.5rem 1rem;
  background: #f0f0f0;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

.competition-detail h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.detail-section {
  margin-bottom: 1.5rem;
}

.detail-section h4 {
  color: #333;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.detail-section p {
  color: #666;
  margin: 0.5rem 0;
}

.detail-section ul {
  margin-left: 1.5rem;
  color: #666;
}

.paper-item {
  padding: 0.75rem;
  background: #f9f9f9;
  border-radius: 6px;
  margin-bottom: 0.5rem;
}
</style>
