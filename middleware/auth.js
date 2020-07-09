export default function ({ app, store, redirect, error }) {
  if (!store.state.auth.currentUser || !store.state.auth.currentToken) {
    return redirect('/')
  }
}
