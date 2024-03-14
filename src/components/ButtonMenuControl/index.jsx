import { Container } from './styles'
import { RiMenu2Fill } from 'react-icons/ri'

export function ButtonMenuControl({ size = 24, onClick, ...rest }) {
  return (
    <Container type="button" {...rest} onClick={onClick}>
      <RiMenu2Fill size={size} />
    </Container>
  )
}
