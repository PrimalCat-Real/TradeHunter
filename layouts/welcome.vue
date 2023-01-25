<script setup>

</script>

<template>
  <div class="h-screen color-mode dark:bg-dark-default dark:text-dark-text bg-light-default font-inter" data-color-mode="dark">
    <nav class="flex">
        <h1 class="light:text-red-200">Color mode: {{ $colorMode.value }}</h1>
        <ThemeSwitcher></ThemeSwitcher>
        <ChangeLang></ChangeLang>
    </nav>
    <slot/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            darkMode: false
        }
    },
}
</script>

<style>

</style>