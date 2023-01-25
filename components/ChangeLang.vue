<template>
  <div class="locale-changer flex gap-2 justify-between">
    <button class="capitalize dark:text-dark-primalGrey text-light-secondaryGrey text-lg font-medium" v-for="(lang, i) in langs" :key="`Lang${i}`" @click.prevent.stop="$i18n.setLocale(lang)" :class="{'active-lang': $i18n.locale === lang}">{{ lang }}</button>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['en', 'ru', 'ua'] }
  }
}
</script>

<style scoped lang="sass">


</style>