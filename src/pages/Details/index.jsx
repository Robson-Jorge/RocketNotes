import { ButtonText } from '../../components/ButtonText/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { Header } from '../../components/Header/index.jsx'
import { Container, Links, Content } from './styles.js'
import { Tag } from '../../components/Tag/index.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api.js'

export function Details() {
  const [data, setData] = useState(null)

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

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir Nota" onClick={handleRemove} />

            <h1>{data.title}</h1>

            <p>{data.description}</p>

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
        </main>
      )}
    </Container>
  )
}
