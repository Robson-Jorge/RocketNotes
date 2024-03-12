import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { api } from '../../services/api'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { NoteSkeleton } from '../../skeletons/NoteSkeleton'
import { TagSkeleton } from '../../skeletons/TagSkeleton'
import {
  ButtonText,
  Header,
  Input,
  Note,
  Section,
} from '../../components/index'

export function Home() {
  const [tags, setTags] = useState([])
  const [tagSelected, setTagSelected] = useState([])

  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    if (tagName === 'all') {
      return setTagSelected([])
    }
    const alreadySelected = tagSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagSelected.filter((tag) => tag !== tagName)

      setTagSelected(filteredTags)
    } else {
      setTagSelected((prevState) => [...prevState, tagName])
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  function handleRemove(id, event) {
    event.stopPropagation()
    const confirm = window.confirm('Tem certeza que deseja excluir essa nota?')
    if (confirm) {
      api.delete(`/notes/${id}`).then(() => {
        const filteredNotes = notes.filter((note) => note.id !== id)
        setNotes(filteredNotes)
      })
    }
  }

  useEffect(() => {
    async function fetch() {
      const response = await api.get('/tags')
      setTags(response.data)
      setLoading(false)
    }
    fetch()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagSelected}`,
      )
      setNotes(response.data)
      setLoading(false)
    }
    fetchNotes()
  }, [tagSelected, search])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected('all')}
            isActive={tagSelected.length === 0}
          />
        </li>
        {loading ? (
          <TagSkeleton />
        ) : (
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagSelected.includes(tag.name)}
              />
            </li>
          ))
        )}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {loading ? (
            <>
              <NoteSkeleton />
              <NoteSkeleton />
            </>
          ) : (
            notes.map((note) => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
                onDeleteNote={(event) => handleRemove(note.id, event)}
              />
            ))
          )}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}
