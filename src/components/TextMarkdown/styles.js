import Highlight from 'react-highlight'
import styled from 'styled-components'

export const Container = styled.div`
  width: 550px;
  margin: 0;
  margin-top: 15px;
  padding: 1em;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 8px;
`

export const CodeHighlight = styled(Highlight)`
  .hljs-tag {
    color: #d0d2d7;
  }

  .hljs-comment {
    color: #9a7fff;
    font-weight: 450;
  }

  .hljs-keyword {
    color: #d86fc0;
  }

  .hljs-function {
    color: #4098d7;
  }

  .hljs-title {
    color: #00c769;
  }

  .hljs-params {
    color: #d86fc0;
  }

  .hljs-name {
    color: #7b65cc;
  }

  .hljs-attr {
    color: #00c769;
  }

  .hljs-string {
    color: #ffe24f;
  }

  .hljs-function {
    color: #ffe24f;
  }

  .hljs-built_in {
    color: #00c769;
  }

  .hljs-number {
    color: #86ddff;
  }
`
// Classes de estilização do HighlightJS

// hljs-comment: Estiliza os comentários no código.
// hljs-quote: Estiliza as citações no código.
// hljs-variable: Estiliza as variáveis no código.
// hljs-template-variable: Estiliza as variáveis do modelo no código.
// hljs-selector-tag: Estiliza as tags de seleção no código.
// hljs-selector-id: Estiliza os identificadores de seleção no código.
// hljs-selector-class: Estiliza as classes de seleção no código.
// hljs-selector-attr: Estiliza os atributos de seleção no código.
// hljs-selector-pseudo: Estiliza os pseudos seletores no código.
// hljs-string: Estiliza strings no código.
// hljs-number: Estiliza números no código.
// hljs-regexp: Estiliza expressões regulares no código.
// hljs-literal: Estiliza literais no código.
// hljs-type: Estiliza tipos no código.
// hljs-params: Estiliza parâmetros no código.
// hljs-built_in: Estiliza funções e métodos incorporados no código.
// hljs-builtin-name: Estiliza nomes de funções e métodos incorporados no código.
// hljs-symbol: Estiliza símbolos no código.
// hljs-bullet: Estiliza marcadores de bala no código.
// hljs-link: Estiliza links no código.
// hljs-meta: Estiliza metadados no código.
// hljs-selector-id: Estiliza IDs de seletores no código.
// hljs-selector-class: Estiliza classes de seletores no código.
// hljs-emphasis: Estiliza ênfase no código.
// hljs-strong: Estiliza texto forte no código.
// hljs-formula: Estiliza fórmulas no código.
