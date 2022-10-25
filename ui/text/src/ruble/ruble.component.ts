import styled            from '@emotion/styled'

import { createElement } from 'react'
import { color }         from 'styled-system'

const Span = styled.span(
  () => ({
    display: 'inline-flex',
  }),
  color
)

export const Ruble = () => createElement(Span, {}, '\u20BD')
