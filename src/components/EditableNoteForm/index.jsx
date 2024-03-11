import { useState } from 'react'
import { Form } from './styles'
import { Textarea, Input, Section, NoteItem, Button } from '../index'
import { noteFormValidation } from './utils/noteFormValidation'

export function EditableNoteForm({ data, loading = false, onSubmit }) {
  const [title, setTitle] = useState(data ? data.title : '')
  const [description, setDescription] = useState(data ? data.description : '')

  const homeLinks = data ? data.links.map((link) => link.url) : []
  const homeTags = data ? data.tags.map((tag) => tag.name) : []

  const [links, setLinks] = useState(homeLinks || [])
  const [newLink, setNewLink] = useState('')
  const [tags, setTags] = useState(homeTags || [])
  const [newTag, setNewTag] = useState('')

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted))
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleSubmit() {
    const formData = noteFormValidation(
      title,
      description,
      links,
      tags,
      newLink,
      newTag,
    )

    if (!formData) {
      return
    }
    onSubmit(formData)
  }

  return (
    <Form>
      <Input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Observações"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Section title="Links úteis">
        {links.map((link, index) => (
          <NoteItem
            key={String(index)}
            value={link}
            onClick={() => handleRemoveLink(link)}
          />
        ))}
        <NoteItem
          isNew
          placeholder="Novo link"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
          onClick={handleAddLink}
        />
      </Section>

      <Section title="Marcadores">
        <div className="tags">
          {tags.map((tag, index) => (
            <NoteItem
              key={String(index)}
              value={tag}
              onClick={() => handleRemoveTag(tag)}
            />
          ))}
          <NoteItem
            isNew
            placeholder="Nova tag"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onClick={handleAddTag}
          />
        </div>
      </Section>

      <Button title="Salvar" loading={loading} onClick={handleSubmit} />
    </Form>
  )
}
