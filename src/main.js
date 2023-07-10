import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'


library.add(faCircleExclamation, faCircleCheck)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(ElementPlus)
    .mount('#app')
