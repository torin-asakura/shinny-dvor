import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import type { CardProps }         from './card.interface.js'

import { Backdrop }               from '@atls-ui-parts/card'
import { Renderer }               from '@atls-ui-parts/card'
import { motion }                 from 'framer-motion'
import React                      from 'react'

export const Card: FC<PropsWithChildren<CardProps>> = ({ children, opened, onClose }) => {
  return (
    <Renderer opened={opened}>
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 800,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Backdrop onClick={onClose} />
      </motion.div>
      <motion.div
        style={{ position: 'fixed', left: 0, bottom: '-50%', width: '100%', zIndex: 900 }}
        animate={{ bottom: 0 }}
        exit={{ bottom: '-50%' }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </Renderer>
  )
}
