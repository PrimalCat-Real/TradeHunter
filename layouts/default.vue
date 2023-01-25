<script lang="ts" setup></script>

<template>
  <main class="w-full h-screen bg-primary-background flex">
    <Sidebar></Sidebar>
    <slot />
  </main>
</template>

<style scoped>
.test{
  background: linear-gradient(90deg, #2D363D 0%, #1C1B20 100%);
}
</style>
