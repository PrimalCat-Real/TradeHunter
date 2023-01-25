<template>
  <div class="locale-changer">
    <button v-for="(lang, i) in langs" :key="`Lang${i}`" @click="changeLanguage(lang)" :class="{'active-lang': $i18n.locale === lang}">{{ lang }}</button>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { langs: ['ru', 'en', 'ua'] }
  },
  methods: {
    changeLanguage(lang) {
        this.$i18n.locale = lang
    }
}
}
</script>

<style scoped lang="sass">


</style>