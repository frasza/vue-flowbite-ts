<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="p-2">
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
  </div>
  <RouterView />
</template>
