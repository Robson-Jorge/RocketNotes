import Markdown from 'react-markdown'

import { Container, CodeHighlight } from './styles'

const HighlightedMarkdown = ({ children = '', language = 'javascript' }) => {
  return (
    <Container>
      <CodeHighlight language={language}>{children}</CodeHighlight>
    </Container>
  )
}

export function TextMarkdown({ value = '' }) {
  return (
    <Markdown
      children={value}
      components={{ code: HighlightedMarkdown }}
      unwrapDisallowed
    />
  )
}
