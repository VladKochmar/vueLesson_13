<template>
  <div class="container">
    <nav>
      <router-link :to="{ name: 'home' }">Головна</router-link> |
      <router-link :to="{ name: 'lessons-select' }">Уроки</router-link>
    </nav>
    <div>
      <div v-if="authParams">
        <span>{{ userName }}</span> |
        <button @click="onLogout">Вихід</button>
      </div>
      <div v-else>
        <router-link :to="{ name: 'login' }">Увійти</router-link>
      </div>
    </div>
  </div>

  <slot></slot>
</template>

<script>
export default {
  name: 'MainMasterpage',

  computed: {
    authParams() {
      const params = localStorage.getItem('authParams')
      return params ? JSON.parse(params) : null
    },

    userName() {
      return this.authParams?.userName
    },
  },

  methods: {
    onLogout() {
      localStorage.removeItem('authParams')
      this.$router.push({ name: 'login' })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
