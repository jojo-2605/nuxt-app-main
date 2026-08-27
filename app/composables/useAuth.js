// app/composables/useAuth.js
export const useAuth = () => {

  const setToken = (newToken) => {
    token.value = newToken
  }

  const logout = () => {
    token.value = null
  }

  return {
    token,
    setToken,
    logout,
    isAuthenticated: computed(() => !!token.value)
  }
}