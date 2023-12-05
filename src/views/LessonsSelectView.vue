<template>
  <div>
    <h2>Виберіть уроки:</h2>
    <ul class="subjects-list">
      <li v-for="subject in subjects" :key="subject.id">
        <label>
          {{ subject.title }}
          <input v-model="selectedSubjects" type="checkbox" :value="subject.id" />
        </label>
      </li>
    </ul>
    <button :disabled="noSelection" @click="onSelect">Вибрати вчителів</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LessonsSelectView',

  data() {
    return {
      selectedSubjects: [],
    }
  },

  computed: {
    ...mapGetters('subjects', ['subjects']),

    noSelection() {
      return !this.selectedSubjects.length
    },
  },

  methods: {
    onSelect() {
      this.$router.push({ name: 'teachers-select', params: { subjectIDs: this.selectedSubjects } })
    },
  },
}
</script>

<style lang="scss" scoped></style>
