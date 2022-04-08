import UserList from './components/UserList.js'
import Avatar from './components/Avatar.js'

const app = {
    // nothing here in this simple app
    // but data(), methods() etc of the main
    // application goes here
    components: {
        Avatar
    }
}

const vueApp = Vue.createApp(app)

vueApp.component('user-list', UserList)

vueApp.mount("#app")
