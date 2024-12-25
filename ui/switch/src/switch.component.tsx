import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { SwitchProps }       from './switch.interface.js'

import React                      from 'react'

import { Box }                    from '@ui/layout'

import { ActiveProvider }         from './context/index.js'
import { SwitchItem }             from './item/index.js'

export const Switch: FC<PropsWithChildren<SwitchProps>> = ({ active, items, onSelect }) => {
  if (items?.length) {
    return (
      <ActiveProvider value={active}>
        <Box
          borderRadius='$small'
          backgroundColor='$fillGray'
          width='100%'
          height='48px'
          padding='4px'
        >
          {items.map((item: string | null) =>
            item ? (
              <SwitchItem key={item} value={item} onSelect={onSelect}>
                {item}
              </SwitchItem>
            ) : null)}
        </Box>
      </ActiveProvider>
    )
  }

  return null
}
