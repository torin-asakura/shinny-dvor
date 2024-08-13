import { FC }        from 'react'
import { motion }    from 'framer-motion'
import React         from 'react'

import { Backdrop }  from './backdrop/index.js'
import { CardProps } from './card.interface.js'
import { Renderer }  from './renderer/index.js'

const Card: FC<CardProps> = ({ children, active, onClose }) => (
  <Renderer active={active}>
    <motion.div
      style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', height: '100%', zIndex: 800 }}
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

export { Card }
