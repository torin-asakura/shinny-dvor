import type { TextEllipsisProps } from './text-ellipsis.interface.js'

import styled                     from '@emotion/styled'

import { Text }                   from '../index.js'

export const TextEllipsis = styled(Text)<TextEllipsisProps>(({ lineClamp }) => ({
  display: '-webkit-box',
  '-webkit-line-clamp': `${lineClamp}`,
  '-webkit-box-orient': 'vertical',
}))
