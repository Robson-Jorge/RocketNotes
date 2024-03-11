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
  const { user, updateProfile, signOut } = useAuth()

  const [loading, setLoading] = useState(false)

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

    setLoading(true)
    const userUpdated = Object.assign(user, updated)
    await updateProfile({ user: userUpdated, avatarFile })
    setLoading(false)

    navigate(-1)
  }

  async function handleDeleteAccount() {
    const confirm = window.confirm(
      'Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.',
    )

    if (!confirm) return

    try {
      await api.delete('/users', { user })
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message)
      }
    }

    navigate('/', { replace: true })
    signOut()
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

        <ButtonDelete
          size={18}
          title={'Excluir conta'}
          onClick={handleDeleteAccount}
        />
        <Button title="Salvar" loading={loading} onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
