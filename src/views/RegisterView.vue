<template>
  <div>
    <h1>회원가입 페이지입니다</h1>
    <form @submit.prevent="registerUser">
      <label for="">이메일</label>
      <input type="email" v-model="sEmail"><br>
      <label for="">비밀번호</label>
      <input type="password" v-model="sPassword"><br>
      <input type="submit" value="회원가입">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      sEmail: "",
      sPassword: ""
    })
  },
  methods: {
    registerUser() {
      this.$store.dispatch('registerUser', {
        email: this.sEmail,
        password: this.sPassword
      })
    }
  }
}
</script>