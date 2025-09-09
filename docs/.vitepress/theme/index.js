import DefaultTheme from 'vitepress/theme'
import './custom.css'

// Import custom components
import ServiceBadge from './components/ServiceBadge.vue'
import DeployButton from './components/DeployButton.vue'
import CategoryCard from './components/CategoryCard.vue'
import DifficultyLevel from './components/DifficultyLevel.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register custom components globally
    app.component('ServiceBadge', ServiceBadge)
    app.component('DeployButton', DeployButton)
    app.component('CategoryCard', CategoryCard)
    app.component('DifficultyLevel', DifficultyLevel)
  }
}