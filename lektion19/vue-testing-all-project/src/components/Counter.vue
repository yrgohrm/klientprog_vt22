<template>
    <div>
        {{ counter2Store.counter }}
        <button @click="counter2Store.increment()">Click</button>
    </div>
</template>

<script>
import { useCounter2Store } from "@/stores/othercounter"
import { mapStores } from "pinia"

export default {
    computed: {
        ...mapStores(useCounter2Store),
    },
}
</script>
