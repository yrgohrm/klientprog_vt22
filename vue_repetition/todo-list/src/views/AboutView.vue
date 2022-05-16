<template>
  <div class="about">
    <TodoList :done="true"/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    TodoList,
  }
}
</script>