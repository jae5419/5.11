<template>
  <div id="app">
    <nav v-if="!authStatus">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">회원가입</router-link>
    </nav>
    <nav v-if="authStatus">
      <router-link to="/main">Home</router-link> |
      <a @click="fnLogout">로그아웃</a> |
      <a @click="fnDeleteUser">회원탈퇴</a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    authStatus() {
      return this.$store.getters.getAuthStatus;
    }
  },
  methods: {
    fnLogout() {
      this.$store.dispatch('LogoutUser');
    },
    fnDeleteUser() {
      this.$store.dispatch('DeleteUser');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
