'use client'

import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { LayerProps }        from './layer.interface.js'

import { AnimatePresence }        from 'framer-motion'
import { useEffect }              from 'react'
import React                      from 'react'

import { Box }                    from '@ui/layout'

import { Container }              from './container/index.js'
import { useScrollBlock }         from './hooks/index.js'

export const Layer: FC<PropsWithChildren<LayerProps>> = ({ children, visible }) => {
  const [blockScroll, allowScroll] = useScrollBlock()

  useEffect(() => {
    if (blockScroll && allowScroll) {
      if (visible) {
        blockScroll()
      } else {
        allowScroll()
      }
    }
  }, [visible])

  return (
    <AnimatePresence>
      {
        // eslint-disable-next-line react/jsx-no-leaked-render
        visible && (
          <Container>
            <Box width='100%' height='100%' justifyContent='center' alignItems='center'>
              {children}
            </Box>
          </Container>
        )
      }
    </AnimatePresence>
  )
}
