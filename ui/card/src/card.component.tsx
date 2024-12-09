import type { CardProps }         from './card.interface.js'
import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import React                      from 'react'
import { motion }                 from 'framer-motion'

import { Backdrop }               from './backdrop/index.js'
import { Renderer }               from './renderer/index.js'

export const Card: FC<PropsWithChildren<CardProps>> = ({ children, active, onClose }) => {
  return <h1>card</h1>
}

// <Renderer active={active}>
//   <motion.div
//     style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', height: '100%', zIndex: 800 }}
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     transition={{ duration: 0.3 }}
//   >
//     <Backdrop onClick={onClose} />
//   </motion.div>
//   <motion.div
//     style={{ position: 'fixed', left: 0, bottom: '-50%', width: '100%', zIndex: 900 }}
//     animate={{ bottom: 0 }}
//     exit={{ bottom: '-50%' }}
//     transition={{ duration: 0.3 }}
//   >
//     {children}
//   </motion.div>
// </Renderer>
