<template>
  <h1>Welcome</h1>

  <p>{{counterStore.counter}}</p>
  <input type="button" value="Increase" @click="counterStore.increment">
  <input type="button" value="Random" @click="counterStore.incrementRandom">
</template>

<script>
import { mapStores } from "pinia"
import { useCounterStore } from "../stores/counter"

export default {
  name: 'TheWelcome',
  computed: {
    ...mapStores(useCounterStore)
  },
}
</script>