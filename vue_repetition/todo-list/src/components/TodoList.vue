<template>
  <ul class="todolist">
    <li
      v-for="todo of filteredTodoList"
      :key="todo.name"
      :class="{ todolist__done: todo.done }"
    >
      <input type="checkbox" v-model="todo.done" />
      {{ firstUpper(todo.name) }}
      <button @click="speak(todo)" class="btn btn-secondary bg-light btn-sm">
        <img
          src="/node_modules/bootstrap-icons/icons/play-fill.svg"
          alt="play"
        />
      </button>
    </li>
  </ul>
</template>

<script>
import { mapStores } from "pinia";
import { useTodoStore } from "@/stores/todo.js";

const STORAGE_KEY = "todolist";

export default {
  props: {
    done: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    filteredTodoList() {
      return this.todoStore.todoList.filter((t) => t.done === this.done);
    },
    ...mapStores(useTodoStore),
  },
  created() {
    const json = localStorage.getItem(STORAGE_KEY);
    if (json !== null) {
      this.todoStore.todoList = JSON.parse(json);
    }
  },
  methods: {
    firstUpper(text) {
      return text[0].toUpperCase() + text.substring(1);
    },
    speak(todo) {
      if (speechSynthesis) {
        let text = todo.name;
        if (todo.done) {
            text += ". Klart!";
        }
        let utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
      }
    },
  },
  watch: {
    "todoStore.todoList": {
      deep: true,
      handler() {
        const json = JSON.stringify(this.todoStore.todoList);
        localStorage.setItem(STORAGE_KEY, json);
      },
    },
  },
};
</script>

<style scoped>
.todolist {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}

.todolist > li {
  background-color: white;
  margin-bottom: 0.2rem;
  padding: 0.5rem;
  list-style: none;
  display: inline-block;
  border: 1px solid gainsboro;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.todolist__done {
  text-decoration: line-through;
}
</style>
