export function noteFormValidation(
  title,
  description,
  links,
  tags,
  newLink,
  newTag,
) {
  if (!title) {
    alert('Por favor, insira o título da nota')
    return null
  }

  if (newLink) {
    alert(
      'Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio',
    )
    return null
  }

  if (newTag) {
    alert(
      'Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio',
    )
    return null
  }

  if (links.length === 0) {
    alert('Adicione pelo menos um link')
    return null
  }

  const Data = {
    title,
    description,
    links,
    tags,
  }

  return Data
}
