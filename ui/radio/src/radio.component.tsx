/* eslint-disable */

import type { RadioProps }             from './radio.interface.js'
import type { FC }                     from 'react'

import styled                          from '@emotion/styled'
import { createCheckBaseStyles }       from '@atls-ui-parts/checkbox'
import { createCheckAppearanceStyles } from '@atls-ui-parts/checkbox'

import React                           from 'react'

import { Layout }                      from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Text }                        from '@ui/text'
import { useHover }                    from '@ui/utils'

import { Container }                   from './container/index.js'
import { getCheckColor }               from './helper/index.js'

export const Radio = () => {
  return <h1>Radio</h1>
}

// export const Radio: FC<RadioProps> = ({ children, checked, textTransform = 'lowercase' }) => {
//   const [hover, hoverProps] = useHover()
//
//   const RadioStyled = styled.div<{ checked: boolean }>(createCheckBaseStyles())
//
//   const Checkmark = styled.div(
//     createCheckBaseStyles(),
//     createCheckAppearanceStyles({
//       color: getCheckColor(hover, checked),
//     })
//   )
//
//   return (
//     <Column width='100%'>
//       <Container checked={checked} {...hoverProps}>
//         <Checkmark>
//           <Text textTransform={textTransform} fontSize='small' fontWeight='medium'>
//             {children}
//           </Text>
//         </Checkmark>
//         <RadioStyled checked={checked} />
//       </Container>
//       <Layout flexBasis={12} />
//     </Column>
//   )
// }
