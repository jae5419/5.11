<template>
  <div>
    <h1>메인 페이지입니다</h1>
    <img v-if="getUser.photoURL" :src="getUser.photoURL">
    <h3>{{ getUser.name }}</h3>
    <p>{{ getUser.email }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    }
  }
}
</script>