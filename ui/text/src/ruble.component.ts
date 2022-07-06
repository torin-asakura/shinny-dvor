import styled            from '@emotion/styled'

import { createElement } from 'react'
import { color }         from 'styled-system'

interface RubleProps {
  fontSize?: string | string[]
  fontWeight?: string | string[]
}

const Span = styled.span(
  () => ({
    display: 'inline-flex',
  }),
  color
)

export const Ruble = ({ fontSize, fontWeight }: RubleProps) => createElement(Span, {}, '\u20BD')
