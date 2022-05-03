<template>
  <div>
    {{store.count}}
    <input type="button" @click="store.increment(1)" value="add one">
  </div>
</template>

<script>
import { store } from '@/store'

export default {
  data() {
    return {
      store
    }
  }
}
</script>

<style scoped>
div {
  border: 3px solid teal;
  border-radius: 5px;
  min-width: 100px;
}
</style>
