<script setup lang="ts">
import Flowbite from "flowbite";
import type Dropdown from "flowbite/src/components/dropdown";
import { onMounted, ref } from "vue";

let dropdown: Dropdown | null;

const dropdownMenu = ref(null);
const dropdownButton = ref(null);

onMounted(() => {
  dropdown = new Flowbite.Dropdown(dropdownMenu.value, dropdownButton.value);
});
</script>

<template>
  <button
    ref="dropdownButton"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
    type="button"
  >
    Dropdown button
  </button>
  <!-- Dropdown menu -->
  <div
    ref="dropdownMenu"
    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
  >
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
      <li>
        <a
          href="#"
          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Dashboard</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Settings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Earnings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Sign out</a
        >
      </li>
    </ul>
  </div>
</template>
