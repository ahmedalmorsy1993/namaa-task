/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { i18n } from '@/lang'
import '@/assets/scss/main.scss'
// Components
import App from './App.vue'
import UUID from "vue3-uuid";

// Composables
import { createApp } from 'vue'

const app = createApp(App)
registerPlugins(app)
app.use(i18n).use(UUID)

app.mount('#app')
