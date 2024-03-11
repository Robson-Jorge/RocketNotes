import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

import { AppRouter } from './app.routes'
import { AuthRouter } from './auth.routes'

export function Routes() {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>Carregando...</div>
  }

  return <BrowserRouter>{user ? <AppRouter /> : <AuthRouter />}</BrowserRouter>
}
