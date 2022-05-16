<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="container">
    <div class="row my-5">
      <div class="col-12">
        <h1>The Nice ToDo</h1>
      </div>
      <nav class="col-12">
        <RouterLink to="/" class="btn btn-primary">Todo</RouterLink>
        <RouterLink to="/about" class="btn btn-secondary mx-2">Done</RouterLink>
      </nav>
    </div>
  </header>

  <div class="container bg-light p-3">
    <RouterView />
  </div>
</template>
