import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'

import { Container, Profile, Logout } from './styles'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? user.avatar : avatarPlaceholder

  return (
    <Container>
      <Profile to={'/profile'}>
        <img
          src={avatarUrl}
          onError={(e) => (e.target.src = avatarPlaceholder)}
          alt={user.name}
        />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine onClick={signOut} />
      </Logout>
    </Container>
  )
}
