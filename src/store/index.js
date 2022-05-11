import Vue from 'vue'
import Vuex from 'vuex'

import '@/datasources/firebase'
import { getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  deleteUser } from "firebase/auth";
import router from '@/router';

  const auth = getAuth();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getAuthStatus(state) {
      return state.user!=null;
    }
  },
  mutations: {
    setUser(state, payload) {
      state.user=payload;
    }
  },
  actions: {
    registerUser({commit}, payload) {
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((userInfo) => {
        commit('setUser', {
          email: userInfo.user.email
        });
        router.push('/main');
      })
      .catch((err) => {
        console.log(err.message);
      })
    },
    loginUser({commit}, payload) {
      signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((userInfo) => {
        commit('setUser', {
          email: userInfo.user.email
        });
        router.push('/main');
      })
      .catch((err) => {
        console.log(err.message);
      })
    },
    loginGoogleAuth({commit}) {
      const provider=new GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      signInWithPopup(auth, provider)
      .then((userInfo) => {
        commit('setUser', {
          name: userInfo.user.displayName,
          email: userInfo.user.email,
          photoURL: userInfo.user.photoURL
        });
        router.push('/main');
      })
      .catch((err) => {
        console.log(err.message);
      })
    },
    LogoutUser({commit}) {
      signOut(auth)
      .then(() => {
        commit('setUser', null);
        router.push('/');
      })
      .catch((err) => {
        console.log(err.message);
      })
    },
    DeleteUser({commit}) {
      const user=auth.currentUser;
      deleteUser(user)
      .then(() => {
        commit('setUser', null);
        router.push('/');
      })
    }
  },
  modules: {
  }
})
