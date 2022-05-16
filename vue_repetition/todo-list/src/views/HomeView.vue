<template>
  <main>
    <form @submit.prevent="addTodo" class="my-3">
      <input type="text" v-model="todoText" />
      <input type="submit" value="Add todo" />
    </form>

    <TodoList />
  </main>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import { mapStores } from "pinia";
import { useTodoStore } from "@/stores/todo.js";

export default {
  data() {
    return {
      todoText: "",
    };
  },
  computed: {
    ...mapStores(useTodoStore),
  },
  components: {
    TodoList,
  },
  methods: {
    addTodo() {
      this.todoStore.addTodo(this.todoText);
      this.todoText = "";
    },
  },
};
</script>

<style>
</style>
