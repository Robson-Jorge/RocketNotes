import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { Container } from './styles'
export function NoteSkeleton() {
  return (
    <Container>
      <Skeleton className="title" width={300} />
      <footer>
        <Skeleton className="tags" />
      </footer>
    </Container>
  )
}
