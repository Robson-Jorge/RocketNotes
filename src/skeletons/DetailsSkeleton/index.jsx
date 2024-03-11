import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Container } from './styles'

export function DetailsSkeleton() {
  return (
    <main>
      <Container>
        <ButtonText title="Excluir Nota" />
        <Skeleton className="title" />
        <Skeleton className="paragraph" />
        <Section title="Links úteis">
          <Skeleton className="paragraph" />
        </Section>
        <Section title="Marcadores" className="flex">
          <Skeleton className="tags" />
        </Section>
        <Button title="Voltar" />
      </Container>
    </main>
  )
}
