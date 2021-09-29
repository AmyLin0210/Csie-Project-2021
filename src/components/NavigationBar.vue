<template lang="pug">
section.navigation-bar
  h1.title NCKU-CSIE 大學部專題展
  el-dropdown.dropdown(@command="handleCommand")
    span.el-dropdown-link
      i.el-icon-more.el-icon--right
    template(#dropdown)
      el-dropdown-menu.dropdown
        el-dropdown-item(
          v-for="(item, index) in allFields"
          :key="`field-${index}`"
          :command="index") {{item}}
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "nagigation-bar",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    ...mapMutations(
      'field',
      ['setCurrentField']
    ),
    handleCommand: function (command) {
      location.href = `#title-${command}`
      return this.setCurrentField(command)
    }
  },
  computed: {
    ...mapGetters(
      'field',
      ['allFields']
    )
  }
}
</script>

<style lang="scss" scoped>
.navigation-bar {
  // [ layout ]
  display: flex;
  position: fixed;
  align-items: center;
  z-index: 1;
  left: 0;
  top: 0;

  // [ position ]
  height: 60px;
  width: 100%;

  // [ skin ]
  background-color: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
}
.dropdown {
  // [ layout ]
  display: block;

  // [ skin ]
  cursor: pointer;
}

.el-dropdown-link {
  // [ skin ]
  cursor: pointer;
}

.title {
  // [ layout ]
  display: block;
  float: left;

  // [ position ]
  width: auto;
  margin: {
    left: 20px;
    right: 20px;
  }

  // [ skin ]
  font-size: 20px;

  // [ RWD: small ]
  @media screen and (min-width: 768px) {
    margin: {
      left: 40px;
      right: 20px;
    }
  }
}
</style>