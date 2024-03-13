import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { api } from '../../services/api'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Background, Container, Form } from './styles'
import { Input, Button } from '../../components/index'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos')
    }

    setLoading(true)
    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar o usuário')
        }
      })
      .finally(() => setLoading(false))
  }

  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

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
          placeholder="Senha"
          type="password"
          icon={FiLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" loading={loading} onClick={handleSignUp} />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}
