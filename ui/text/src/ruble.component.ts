import styled            from '@emotion/styled'
import { color }         from 'styled-system'
/* eslint-disable react/require-default-props */
import { createElement } from 'react'

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
