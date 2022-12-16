<script setup lang="ts">
import { Accordion } from "flowbite-ts-test";
import { onMounted } from "vue";

onMounted(() => {
  const accordionItems = [
    {
      id: "accordion-example-heading-1",
      triggerEl: document.querySelector("#accordion-example-heading-1"),
      targetEl: document.querySelector("#accordion-example-body-1"),
      active: true,
    },
  ];

  const accordion = new Accordion(accordionItems);
  accordion.open("accordion-example-heading-1");
});
</script>

<template>
  <div>
    <h2 id="accordion-example-heading-1">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-expanded="true"
        aria-controls="accordion-example-body-1"
      >
        <span>What is Flowbite?</span>
      </button>
    </h2>
    <div
      id="accordion-example-body-1"
      class="hidden"
      aria-labelledby="accordion-example-heading-1"
    >
      <div
        class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
      >
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is an open-source library of interactive components built on
          top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
          more.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to
          <a
            href="/docs/getting-started/introduction/"
            class="text-blue-600 dark:text-blue-500 hover:underline"
            >get started</a
          >
          and start developing websites even faster with components on top of
          Tailwind CSS.
        </p>
      </div>
    </div>
  </div>
</template>
