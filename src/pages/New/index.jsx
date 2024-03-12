import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'
import { ButtonText, EditableNoteForm, Header } from '../../components/index'

export function New() {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleNewNote(formData) {
    setLoading(true)

    await api.post('/notes', formData)

    alert('Nota criada com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <header>
          <h1>Criar uma nova nota</h1>
          <ButtonText title="Voltar" onClick={handleBack} />
        </header>
        <EditableNoteForm loading={loading} onSubmit={handleNewNote} />
      </main>
    </Container>
  )
}
