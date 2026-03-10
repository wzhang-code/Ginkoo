<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="logo">Ginkoo.org</router-link>
        <div class="nav-links">
          <router-link to="/research">研究项目</router-link>
          <router-link to="/competition">竞赛百科</router-link>
          <router-link to="/major">专业咨询</router-link>
          <router-link to="/essay">文书写作</router-link>
        </div>
      </div>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
    <footer class="footer">
      <p>Ginkoo.org - 您的留学咨询伙伴</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
}

.nav-links a:hover {
  opacity: 0.8;
}

.main-content {
  min-height: calc(100vh - 140px);
  padding: 2rem;
  background: #f5f7fa;
}

.footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem;
}
</style>
