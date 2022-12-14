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
      <li>
        <RouterLink
          :to="{ name: 'dropdown' }"
          class="font-medium text-blue-600 hover:underline"
          >Dropdown</RouterLink
        >
      </li>
      <li>
        <RouterLink
          :to="{ name: 'modal' }"
          class="font-medium text-blue-600 hover:underline"
          >Modal</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>
