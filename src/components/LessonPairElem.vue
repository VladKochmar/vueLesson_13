<template>
  <li>{{ subjectTitle }} - {{ teacherName }}</li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LessonPairElem',

  props: {
    lessonPair: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapGetters({
      getSubjectById: 'subjects/getItemById',
      getTeacherById: 'teachers/getItemById',
    }),

    subjectId() {
      return this.lessonPair.split('-')[0]
    },

    subjectTitle() {
      return this.getSubjectById(parseInt(this.subjectId))?.title
    },

    teacherId() {
      return this.lessonPair.split('-')[1]
    },

    teacherName() {
      return this.getTeacherById(parseInt(this.teacherId))?.name
    },
  },
}
</script>

<style lang="scss" scoped></style>
