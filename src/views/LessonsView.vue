<template>
  <main-masterpage>
    <div>
      Уроки
      <router-view />
    </div>
  </main-masterpage>
</template>

<script>
import MainMasterpage from '@/masterpages/MainMasterpage.vue'

export default {
  name: 'LessonsView',
  components: { MainMasterpage },
}
</script>

<style lang="scss" scoped></style>
