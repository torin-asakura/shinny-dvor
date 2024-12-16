import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { SwitchProps }       from './switch.interface.js'

import React                      from 'react'

import { Box }                    from '@ui/layout'

import { ActiveProvider }         from './context/index.js'

export const Switch = () => {
  return <h1>Switch</h1>
}

// export const Switch: FC<PropsWithChildren<SwitchProps>> = ({ active, children }) => (
//   <ActiveProvider value={active}>
//     <Box borderRadius='small' backgroundColor='fillGray' width='100%' height='48px' padding='4px'>
//       {children}
//     </Box>
//   </ActiveProvider>
// )
