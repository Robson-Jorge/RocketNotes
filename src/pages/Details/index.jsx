import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'
import { Container, Links, Content } from './styles.js'
import { DetailsSkeleton } from '../../skeletons/DetailsSkeleton/index.jsx'
import {
  Button,
  ButtonText,
  EditableNoteForm,
  Header,
  Section,
  Tag,
  TextMarkdown,
} from '../../components/index.js'

export function Details() {
  const [data, setData] = useState(null)

  const [loading, setLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm('Tem certeza que deseja excluir essa nota?')
    if (confirm) {
      await api.delete(`/notes/${id}`)
      navigate(-1)
    }
  }

  async function handleUpdate(formData) {
    const confirm = window.confirm(
      'Tem certeza que deseja atualizar essa nota?',
    )

    if (confirm) {
      setLoading(true)
      await api.put(`/notes/${data.id}`, formData)

      const response = await api.get(`/notes/${id}`)
      setData(response.data)
      setIsEditing(false)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await api.get(`/notes/${id}`)

        setData(response.data)
      } catch (error) {
        if (error) {
          navigate('/404')
        }
      }
    }
    fetchNote()
  }, [])

  return (
    <Container>
      <Header />

      {!data ? (
        <DetailsSkeleton />
      ) : (
        <main>
          {isEditing ? (
            <div>
              <ButtonText
                title="Cancelar"
                type="button"
                className="cancel-button"
                onClick={() => setIsEditing(false)}
              />
              <EditableNoteForm
                data={data}
                loading={loading}
                onSubmit={handleUpdate}
              />
            </div>
          ) : (
            <Content>
              <div>
                <ButtonText
                  title="Editar Nota"
                  onClick={() => setIsEditing(true)}
                />
                <ButtonText title="Excluir Nota" onClick={handleRemove} />
              </div>

              <h1>{data.title}</h1>

              <TextMarkdown value={data.description} />

              {data.links && (
                <Section title="Links úteis">
                  <Links>
                    {data.links.map((link) => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))}
                  </Links>
                </Section>
              )}

              {data.tags && (
                <Section title="Marcadores">
                  {data.tags.map((tag) => (
                    <Tag key={String(tag.id)} title={tag.name} />
                  ))}
                </Section>
              )}
              <Button title="Voltar" onClick={handleBack} />
            </Content>
          )}
        </main>
      )}
    </Container>
  )
}
