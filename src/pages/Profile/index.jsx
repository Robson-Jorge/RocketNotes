import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { Container, Form } from './styles'
import {
  Button,
  ButtonDelete,
  EditableAvatar,
  Input,
} from '../../components/index'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState('')
  const [passwordNew, setPasswordNew] = useState('')
  const [avatarFile, setAvatarFile] = useState(null)
  const avatarUrl = user.avatar ? user.avatar : avatarPlaceholder

  const navigate = useNavigate()

  async function handleUpdate() {
    if (!avatarFile) {
      const confirm = window.confirm(
        'Antes de salvar suas informações, você pode optar por adicionar ou atualizar sua foto de perfil. Selecione uma imagem e clique em "Salvar Foto" 💾 antes de prosseguir com as alterações no perfil. Deseja continuar sem alterar sua foto de perfil?',
      )

      if (!confirm) return
    }

    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated = Object.assign(user, updated)
    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>
      </header>

      <Form>
        <EditableAvatar setAvatarFile={setAvatarFile} avatarUrl={avatarUrl} />

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          value={passwordOld}
          onChange={(e) => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          value={passwordNew}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
