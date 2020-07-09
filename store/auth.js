export const state = () => ({
  currentUser: null,
  currentToken: null,
})

export const mutations = {
  setUser(state, user) {
    state.currentUser = user
  },
  setToken(state, token) {
    state.currentToken = token
  },
  removeToken(state) {
    state.currentToken = null
  },
}

export const getters = {
  getToken: (state) => state.currentToken,
}

export const actions = {
  async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims }) {
    if (authUser) {
      await dispatch('setupUser', { authUser, claims })
    } else {
      await dispatch('cleanupUser')
    }
  },
  async setupUser({ commit }, { authUser, claims }) {
    const token = await this.$fireAuth.currentUser.getIdToken()

    const { uid, email, emailVerified, displayName, photoURL } = authUser
    const userInfo = {
      uid,
      email,
      emailVerified,
      displayName,
      photoURL,
    }

    commit('setToken', token)
    commit('setUser', userInfo)
  },
  async refreshToken({ commit }) {
    const token = await this.$fireAuth.currentUser.getIdToken(true)
    commit('setToken', token)
  },
  cleanupUser({ commit }) {
    commit('removeToken')
    commit('setUser', null)
  },
}
