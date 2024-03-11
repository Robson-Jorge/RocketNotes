import { Routes, Route, Navigate } from 'react-router-dom'

import { New } from '../pages/New'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'
import { Error } from '../pages/Error'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/404" element={<Error error="404" />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}
