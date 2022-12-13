<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="p-2">
    <RouterLink to="/">Home</RouterLink>
  </div>
  <RouterView />
</template>
