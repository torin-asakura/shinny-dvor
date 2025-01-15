import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import { motion }                 from 'framer-motion'
import React                      from 'react'

import { baseStyles }             from './container.css.js'

export const Container: FC<PropsWithChildren> = ({ children, ...props }) => (
  <motion.div
    className={baseStyles}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    {...props}
  >
    {children}
  </motion.div>
)
