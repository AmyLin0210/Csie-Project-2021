<template lang="pug">
navigation-bar
field-filter
field-cards(
  v-for = "(item, key) in allFields"
  :key  = "`field-${key}`"
  :fieldId = "key",
)
</template>

<script>
import FieldFilter from '@/components/FieldFilter.vue'
import FieldCards from '@/components/FieldCards.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    FieldFilter,
    FieldCards,
    NavigationBar,
  },
  computed: {
    ...mapGetters(
      'field',
      ['allFields']
    )
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  margin: {
    bottom: 0;
    top: 100px;
    left: 0;
    right: 0;
  }
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
