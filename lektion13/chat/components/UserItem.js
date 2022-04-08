import Avatar from './Avatar.js'

export default {
    props: {
        user: Object
    },
    components: {
        avatar: Avatar
    },
    template: `<div :class="{'user-item': true, 'user-item-offline': !user.online}">
                    <avatar :online="user.online" :name="user.name"></avatar>
                    <div>{{user.name}}</div>
                </div>`
}