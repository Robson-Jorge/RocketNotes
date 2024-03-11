import { Routes, Route, Navigate } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Error } from '../pages/Error'

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/401" element={<Error error="401" />} />
      <Route path="*" element={<Navigate to="/401" replace />} />
    </Routes>
  )
}
