<template>
  <AddOne />
  <AddTwo />
</template>

<script>
import AddOne from "./components/AddOne.vue";
import AddTwo from "./components/AddTwo.vue";

export default {
  name: "App",
  components: {
    AddOne,
    AddTwo,
  },
};
</script>

<style>
#app {
  display: flex;
}
</style>
