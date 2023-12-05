<template>
  <ol>
    <lesson-pair-elem v-for="lessonIDsPair in lessonsIDsPairs" :key="lessonIDsPair" :lesson-pair="lessonIDsPair" />
  </ol>
</template>

<script>
import LessonPairElem from '@/components/LessonPairElem.vue'

export default {
  name: 'LessonsPlan',

  components: { LessonPairElem },

  props: {
    lessonsIDsPairs: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
