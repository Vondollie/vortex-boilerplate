<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div
      class="flex flex-col items-center justify-between"
      style="height: 300px;"
    >
      LOGIN
      <neon-input v-model="email" type="text" placeholder="email" />
      <neon-input v-model="password" type="password" placeholder="password" />
      <neon-button @click.native="login">Log in</neon-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthForm',
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    login() {
      this.$fireAuth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('secure')
        })
    },
  },
}
</script>

<style lang="less" scoped></style>
