<template>
    <div class="container-fluid mt-4">
        <div class="row" v-if="version === 4">
            <div class="col-md-8">
                <git-hub-bar></git-hub-bar>
            </div>
            <div class="col-md-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea ipsam voluptas placeat molestias.
                Harum culpa aliquid nihil molestiae quibusdam eos eaque doloribus debitis necessitatibus aut tempora
                architecto, perferendis consectetur quasi labore laborum ipsa eligendi voluptatem ab! Ab molestiae
                excepturi voluptatum voluptas temporibus itaque soluta fuga, adipisci iste quod. Labore.
            </div>
        </div>

        <div class="row" v-if="version === 1">
            <div class="col-md-8">
                <git-hub-bar-1></git-hub-bar-1>
            </div>
            <div class="col-md-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea ipsam voluptas placeat molestias.
                Harum culpa aliquid nihil molestiae quibusdam eos eaque doloribus debitis necessitatibus aut tempora
                architecto, perferendis consectetur quasi labore laborum ipsa eligendi voluptatem ab! Ab molestiae
                excepturi voluptatum voluptas temporibus itaque soluta fuga, adipisci iste quod. Labore.
            </div>
        </div>

        <div class="row" v-if="version === 2">
            <div class="col-md-8">
                <git-hub-bar-2></git-hub-bar-2>
            </div>
            <div class="col-md-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea ipsam voluptas placeat molestias.
                Harum culpa aliquid nihil molestiae quibusdam eos eaque doloribus debitis necessitatibus aut tempora
                architecto, perferendis consectetur quasi labore laborum ipsa eligendi voluptatem ab! Ab molestiae
                excepturi voluptatum voluptas temporibus itaque soluta fuga, adipisci iste quod. Labore.
            </div>
        </div>

        <div class="row" v-if="version === 3">
            <div class="col-md-8">
                <git-hub-bar-3></git-hub-bar-3>
            </div>
            <div class="col-md-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea ipsam voluptas placeat molestias.
                Harum culpa aliquid nihil molestiae quibusdam eos eaque doloribus debitis necessitatibus aut tempora
                architecto, perferendis consectetur quasi labore laborum ipsa eligendi voluptatem ab! Ab molestiae
                excepturi voluptatum voluptas temporibus itaque soluta fuga, adipisci iste quod. Labore.
            </div>
        </div>
    </div>
</template>

<script>
import GitHubBar from "./components/GitHubBar.vue"
import GitHubBar1 from "./components/GitHubBar1.vue"
import GitHubBar2 from "./components/GitHubBar2.vue"
import GitHubBar3 from "./components/GitHubBar3.vue"

export default {
    name: "App",
    data: () => ({
        version: 4,
    }),
    components: {
        GitHubBar,
        GitHubBar1,
        GitHubBar2,
        GitHubBar3,
    },
}
</script>
