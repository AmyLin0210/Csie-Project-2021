<template lang="pug">
section(:class="(fieldId === currentField())? '': 'hidden-sm-and-up'")
  h1.title(:id="`title-${fieldId}`") {{fieldById(fieldId)}}
  el-row.cards-row(type="flex" justify="space-around")
    el-col.cards-col(
      :span="5"
      v-for="(student, index) in studentByFieldId(fieldId)"
      :key="`student-${index}`"
      :lg="{span:5}"
      :sm="{span:11}"
      :xs="{span:24}"
    )
      el-card(:body-style="{ padding: '0px' }")
        h2.subtitle {{student.group}}
        h2.subtitle {{student['title-ch']}}
        p.info {{`領域：${fieldById(fieldId)}`}}
        p.info {{`指導教授 : ${student.teachers.join(' ')}`}}
        el-tag.el-icon-user-solid.name(
          v-for="name in student.names"
          :key="`name-${name}`"
          type="info"
          icon="el-icon-search"
        ) {{name}}
        section.links(:style="{backgroundColor: [colorByFieldId(fieldId)]}")
          el-link.link(:href="student.intro"  target="_blank") 簡介
          el-link.link(:href="student.ppt"   target="_blank") 簡報
          el-link.link(:href="student.video" target="_blank") 影片
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "field-cards",
  props: {
    fieldId: Number,
  },
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {
    ...mapGetters(
      'field',
      ['currentField']
    )
  },
  computed: {
    ...mapGetters(
      'students',
      ['studentByFieldId']
    ),
    ...mapGetters(
      'field',
      ['fieldById', 'colorByFieldId'],
    )
  }
}
</script>


<style lang="scss" scoped>
.title {
  // [ position ]
  margin: 40px;

  // [ skin ]
  font-size: 24px;
}

.subtitle {
  // [ position ]
  margin: {
    top: 16px;
    bottom: 8px;
  }
  padding: {
    left: 12px;
    right: 12px;
  }

  // [ skin ]
  font-size: 20px;
  text-align: left;
}

.info {
  // [ position ]
  margin: {
    top: 6px;
    bottom: 6px;
  }
  padding: {
    left: 20px;
    right: 20px;
  }

  // [ skin ]
  font-size: 16px;
  text-align: left;
  color: rgba(0,0,0,.54);
}

.links {
  // [ layout ]
  display: flex;
  align-items: center;
  justify-content: space-around;

  // [ position ]
  margin-top: 10px;
  padding: {
    top: 14px;
    bottom: 14px;
  }

  // [ skin ]
  font-size: 16px;
  background-color: rgba(152, 221, 202, 1);
}

.name {
  // [ position ]
  font-size: 14px;
  margin: {
    top: 10px;
    bottom: 10px;
    left: 6px;
    right: 6px;
  }
}

.cards-row {
  // [ display ]
  display: flex;

  // [ position ]
  max-width: 1440px;
  margin: {
    left: auto;
    right: auto;
  }

  // [ skin ]
  border: {
    left: 20px;
    right: 20px;
  }
}

.cards-col {
  // [ position ]
  margin-bottom: 48px;
}
</style>