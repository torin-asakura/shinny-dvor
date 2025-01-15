import type { PropsWithChildren } from 'react'
import type { FC }                from 'react'

import type { CardProps }         from './card.interface.js'

import { Backdrop }               from '@atls-ui-parts/card'
import { Renderer }               from '@atls-ui-parts/card'
import { motion }                 from 'framer-motion'
import { memo }                   from 'react'
import React                      from 'react'

export const Card: FC<PropsWithChildren<CardProps>> = memo(({ children, opened, onClose }) => (
  <Renderer opened={opened}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 800,
      }}
    >
      <Backdrop onClick={onClose} />
    </motion.div>
    <motion.div
      animate={{ bottom: 0 }}
      exit={{ bottom: '-50%' }}
      transition={{ duration: 0.3 }}
      style={{ position: 'fixed', left: 0, bottom: '-50%', width: '100%', zIndex: 900 }}
    >
      {children}
    </motion.div>
  </Renderer>
))
