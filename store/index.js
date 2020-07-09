import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const strict = false

export const state = () => ({})

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit }, { res, req }) {
    // if (res && res.locals && res.locals.user) {
    //   const { allClaims: claims, idToken: token, ...authUser } = res.locals.user
    //   await dispatch('onAuthStateChangedAction', {
    //     authUser,
    //     claims,
    //     token,
    //   })
    // }
  },
  nuxtClientInit({ commit }, { req }) {},
}
