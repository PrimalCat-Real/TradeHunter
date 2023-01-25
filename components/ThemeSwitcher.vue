<template>
    <button class="btn-icon" @click="toggleDarkMode($colorMode.preference = 'dark')">  
       <IconMoon :width="30" :height="30"></IconMoon>       
    </button>
    <button class="btn-icon" @click="toggleDarkMode($colorMode.preference ='light')">
      <IconSun :width="30" :height="30"></IconSun>
    </button>
</template>

<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

const enabled = ref(false)

function toggleDarkMode(theme) {
  useColorMode().preference = theme
}
</script>

<style>

</style>