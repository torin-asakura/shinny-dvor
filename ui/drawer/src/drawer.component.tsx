import { FC }          from 'react'
import { motion }      from 'framer-motion'
import React           from 'react'

import { Backdrop }    from './backdrop/index.js'
import { DrawerProps } from './drawer.interface.js'
import { Renderer }    from './renderer/index.js'

const Drawer: FC<DrawerProps> = ({ children, active, onClose }) => (
  <Renderer active={active}>
    <motion.div
      style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 800 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Backdrop onClick={onClose} />
    </motion.div>
    <motion.div
      style={{ position: 'fixed', left: 0, top: '-50%', width: '100%', zIndex: 900 }}
      animate={{ top: 80 }}
      exit={{ top: '-50%' }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  </Renderer>
)

export { Drawer }
