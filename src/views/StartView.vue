<template>
  <div>
    <h1>시작 페이지</h1>
    <a @click="$store.dispatch('loginGoogleAuth')">구글로그인</a><br><br>
    <a @click="$router.push('/login')">이메일로그인</a>
  </div>
</template>
