<template>
  <div class="login">
    <label class="label">
      Логін
      <input v-model="userData.login" type="text" class="input" />
    </label>
    <label class="label">
      Пароль
      <input v-model="userData.password" type="password" class="input" />
    </label>
    <button @click="onLogin" class="button">Увійти</button>
  </div>
</template>

<script>
export default {
  name: 'LoginPageView',

  data() {
    return {
      userData: {},
    }
  },

  methods: {
    onLogin() {
      localStorage.setItem(
        'authParams',
        JSON.stringify({
          userName: this.userData.login,
          userPassword: this.userData.password,
          token: 'testToken',
        })
      )

      this.$router.push({ name: 'home' })
    },
  },
}
</script>

<style lang="scss" scoped></style>
