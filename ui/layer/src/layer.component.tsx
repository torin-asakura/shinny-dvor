'use client'

import type { LayerProps } from './layer.interface.js'
import type { FC }         from 'react'

import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { useEffect }       from 'react'

import { Box }             from '@ui/layout'

import { Container }       from './container/index.js'
import { useScrollBlock }  from './hooks/index.js'

export const Layer: FC<LayerProps> = ({ children, visible }) => {
  const [blockScroll, allowScroll] = useScrollBlock()

  useEffect(() => {
    if (visible) {
      blockScroll()
    } else {
      allowScroll()
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <Container>
          <Box width='100%' height='100%' justifyContent='center' alignItems='center'>
            {children}
          </Box>
        </Container>
      )}
    </AnimatePresence>
  )
}
