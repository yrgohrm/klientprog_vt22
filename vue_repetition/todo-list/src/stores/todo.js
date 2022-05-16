import { defineStore } from "pinia";

export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    todoList: [],
  }),
  actions: {
    addTodo(text) {
      const todoItem = { name: text, done: false };
      this.todoList.unshift(todoItem);
    },
  },
});
