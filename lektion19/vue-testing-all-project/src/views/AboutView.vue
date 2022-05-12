<template>
    <div class="about">
        <h1>This is an about page</h1>
        <p>Counter is {{ counterStore.counter }}</p>
    </div>
</template>

<script>
import { mapStores } from "pinia"
import { useCounterStore } from "../stores/counter"

export default {
    name: "AboutView",
    computed: {
        ...mapStores(useCounterStore),
    },
}
</script>
