<script lang="ts">
export default {
  data() {
    return {
      msg: "You did it!",
    };
  },
  methods: {
    goToWelcome() {
      this.$router.push({ name: "welcome" });
    },
    goToLogin() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper" @click="goToLogin">LoginView</div>
    <div class="wrapper" @click="goToWelcome">WelcomeView</div>
  </header>
  <router-view />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
