<template>
  <div>
    <subject-teacher-select
      v-for="subjectId in subjectsIDs"
      :key="subjectId"
      :subject-id="subjectId"
      @teacher-selected="onTeacherSelect(subjectId, $event)"
    />
    <button @click="onStart">Розпочати навчання</button>
  </div>
</template>

<script>
import SubjectTeacherSelect from '@/components/SubjectTeacherSelect.vue'

export default {
  name: 'TeachersSelectView',

  components: { SubjectTeacherSelect },

  data() {
    return {
      lessons: {},
    }
  },

  computed: {
    subjectsIDs() {
      return this.$route.params.subjectIDs
    },
  },

  methods: {
    onTeacherSelect(subjectId, teacherId) {
      this.lessons[subjectId] = teacherId
    },

    onStart() {
      const lessonsIDsPairs = []

      for (const subjectId in this.lessons) {
        lessonsIDsPairs.push(`${subjectId}-${this.lessons[subjectId]}`)
      }

      this.$router.push({ name: 'study-select', params: { lessonsIDsPairs: lessonsIDsPairs } })
    },
  },
}
</script>

<style lang="scss" scoped></style>
