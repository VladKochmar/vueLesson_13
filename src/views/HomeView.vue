<template>
  <main-masterpage>
    <div class="home">
      <h1>Вітаємо на сайті школи</h1>
      <p>У нащій школі учень сам вибирає уроки та вчителів</p>
      <p>Увійдіть для повноцінного використання</p>
    </div>
  </main-masterpage>
</template>

<script>
import MainMasterpage from '@/masterpages/MainMasterpage.vue'

export default {
  name: 'HomeView',

  components: {
    MainMasterpage,
  },
}
</script>
