import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'

import { ActiveProvider } from './context'
import { SwitchProps }    from './switch.interface'

const Switch: FC<SwitchProps> = ({ active, children }) => (
  <ActiveProvider value={active}>
    <Box borderRadius='small' backgroundColor='fillGray' width='100%' height='48px' padding='4px'>
      {children}
    </Box>
  </ActiveProvider>
)
export { Switch }
