import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Import FontAwesome Core Library
import { library } from '@fortawesome/fontawesome-svg-core'
// Import specific icons
import { faBars, faTv, faShirt, faUtensils, faBasketballBall, faTint, faComputer } from '@fortawesome/free-solid-svg-icons'
// Import brands icons (Facebook, Twitter, Instagram, LinkedIn)
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(faBars, faTv, faShirt, faUtensils, faBasketballBall, faTint, faComputer, faFacebook, faTwitter, faInstagram, faLinkedin)

const app = createApp(App)

// Register FontAwesomeIcon globally
app.component('font-awesome-icon', FontAwesomeIcon)

// Mount app
app.mount('#app')
