import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { FiHome } from 'react-icons/fi'
import image404 from '../../assets/image_404.svg'
import image401 from '../../assets/image_401.svg'

export function Error({ error = '404' }) {
  const navigate = useNavigate()

  const errorImg = error === '404' ? image404 : image401

  const textTitle =
    error === '404' ? 'Página não encontrada' : 'Autenticação não encontrada'

  const textMessage =
    error === '404'
      ? 'A página que você está procurando não está disponível. Certifique-se de que o endereço está correto ou volte para a página inicial.'
      : 'Você precisa estar autenticado para acessar esta página. Por favor, faça login para continuar.'

  function handleBack() {
    navigate('/')
  }
  return (
    <Container>
      <img src={errorImg} alt={`error ${error}`} />
      <h1>{textTitle}</h1>

      <p>{textMessage}</p>

      <button type="button" onClick={handleBack}>
        Inicio
        <FiHome size={24} />
      </button>
    </Container>
  )
}
