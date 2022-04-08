import UserService from '../services/UserService.js'
import UserItem from './UserItem.js'

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        UserService.getUsers().then(users => this.users = users)
    },
    components: {
        userItem: UserItem
    },
    template: `<div class="user-list">
                    <user-item :user="user" v-for="user in users"></user-item>
               </div>`
}