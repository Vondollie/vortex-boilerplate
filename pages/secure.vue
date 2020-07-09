<template>
  <div class="container h-screen flex flex-col items-center justify-center">
    <neon-button @click.native="logout">LOG OUT</neon-button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    logout() {
      this.$fireAuth.signOut().then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>

<style></style>
