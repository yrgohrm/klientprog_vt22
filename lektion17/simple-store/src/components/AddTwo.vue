<template>
  <div>
    {{store.count}}
    <input type="button" @click="store.increment(2)" value="add two">
  </div>
</template>

<script>
import { store } from '@/store'

export default {
  name: 'AddTwo',
  data() {
    return {
      store
    }
  }
}
</script>

<style scoped>
div {
  border: 3px solid rebeccapurple;
  border-radius: 5px;
  min-width: 100px;
}
</style>
