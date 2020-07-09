import https from 'https'

export default function (context) {
  // { $axios, redirect }
  context.$axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  })

  context.$axios.onRequest((config) => {
    return config
  })

  context.$axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      context.app.$notify.error({
        title: 'Error',
        message: error.response.data,
        position: 'topRight',
      })
    }
    if (code === 401) {
      context.app.$notify.error({
        title: 'Error',
        message: 'Unauthorized',
        position: 'topRight',
      })
      context.store.dispatch('user/logoutUser')
      context.redirect('/login')
    }
  })
}
