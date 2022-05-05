<template>
    <div class="btn-toolbar justify-content-between">
        <div>
            <div class="dropdown d-inline-block">
                <a href="#" class="btn btn-secondary btn-sm mx-1 dropdown-toggle" data-bs-toggle="dropdown"> main </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">main</a></li>
                    <li><a class="dropdown-item" href="#">cool-feature</a></li>
                </ul>
            </div>
            <a href="#" class="btn-sm"> 2 branches </a>
            <a href="#" class="btn-sm"> 4 tags </a>
        </div>

        <div>
            <a href="#" class="btn btn-secondary btn-sm mx-1">Go to file</a>
            <div class="dropdown d-inline-block">
                <a href="#" class="btn btn-secondary btn-sm mx-1 dropdown-toggle" data-bs-toggle="dropdown">Add file</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Create new file</a></li>
                    <li><a class="dropdown-item" href="#">Upload file</a></li>
                </ul>
            </div>
            <div class="dropdown d-inline-block">
                <a href="#" class="btn btn-primary btn-sm mx-1 text-light dropdown-toggle" data-bs-toggle="dropdown">
                    Code
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" @click.prevent="clone">Clone</a></li>
                    <li><a class="dropdown-item" href="#">Download</a></li>
                    <li><a class="dropdown-item" href="#">Open</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        clone() {
            alert("Clone")
        },
    },
}
</script>

<style scoped lang="scss">
.btn-sm img {
    margin-top: -3px;
    height: 1.1em;
}
</style>
