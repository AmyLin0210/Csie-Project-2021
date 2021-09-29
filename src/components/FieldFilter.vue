<template lang="pug">
section.field.hidden-xs-only
  el-button(
    v-for="(item, key) in allFields"
    :key="`field-${key}`"
    :type="(currentField === key)? 'info': 'default'"
    @click="setFieldId(key)"
    round) {{item}}
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'field-filter',
  computed: {
    ...mapGetters(
      'field',
      ['allFields', 'currentField']
    ),
  },
  methods: {
    ...mapMutations(
      'field',
      ['setCurrentField']
    ),
    setFieldId: function (fieldId) {
      return this.setCurrentField(fieldId)
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  // [ layout ]
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;

  // [ position ]
  max-width: 994px;
  margin: {
    left: auto;
    right: auto;
    top: 20px;
    bottom: 20px;
  }
}
</style>