import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './views/HomePage.vue'
import ResearchProjectView from './views/ResearchProjectView.vue'
import CompetitionView from './views/CompetitionView.vue'
import MajorView from './views/MajorView.vue'
import EssayView from './views/EssayView.vue'
import './assets/main.css'

const routes = [
  { path: '/', component: HomePage },
  { path: '/research', component: ResearchProjectView },
  { path: '/competition', component: CompetitionView },
  { path: '/major', component: MajorView },
  { path: '/essay', component: EssayView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
