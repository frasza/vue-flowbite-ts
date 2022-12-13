<script setup lang="ts"></script>

<template>
  <nav class="p-8">
    <ul class="block">
      <li>
        <RouterLink
          :to="{ name: 'accordion' }"
          class="font-medium text-blue-600 hover:underline"
          >Acordion</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>
