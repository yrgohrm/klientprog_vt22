export default {
    name: 'Avatar',
    props: {
        name: String,
        online: Boolean
    },
    computed: {
        url() {
            return `https://robohash.org/${this.name}.png?set=set1&size=32x32`
        }
    },
    template: `<div class="avatar" style="position: relative;">
                    <div v-show="online" class="avatar-online-dot"></div>
                    <img :src="url" :alt="name" crossorigin="anonymous">
                </div>`
}