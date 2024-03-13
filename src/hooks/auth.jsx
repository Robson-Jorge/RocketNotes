import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [isSigned, setIsSigned] = useState(false)

  async function signIn({ email, password }) {
    setIsSigned(true)
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      })
      const { token, user } = response.data

      localStorage.setItem('@RocketNotes:user', JSON.stringify(user))
      localStorage.setItem('@RocketNotes:token', token)

      setData({ token, user })

      api.defaults.headers.common.Authorization = `Bearer ${token}`
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar')
      }
    } finally {
      setIsSigned(false)
    }
  }

  function signOut() {
    localStorage.removeItem('@RocketNotes:token')
    localStorage.removeItem('@RocketNotes:user')
    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)
        user.avatar = response.data.avatar
      }
      await api.put('/users', user)
      localStorage.setItem('@RocketNotes:user', JSON.stringify(user))

      setData({
        token: data.token,
        user,
      })
      alert('Perfil atualizado com sucesso!')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível atualizar o perfil')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@RocketNotes:token')
    const user = localStorage.getItem('@RocketNotes:user')

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: data.user,
        signOut,
        updateProfile,
        loading,
        isSigned,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
