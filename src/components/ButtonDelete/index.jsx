import { FiTrash2 } from 'react-icons/fi'
import { Container } from './styles'

export function ButtonDelete({ onClick, title, size, ...rest }) {
  return (
    <Container type="button" onClick={onClick} {...rest}>
      {title}
      <FiTrash2 size={size} />
    </Container>
  )
}
