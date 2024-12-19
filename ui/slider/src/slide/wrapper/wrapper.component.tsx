import type { WrapperProps } from './wrapper.interfaces.js'

import { memo }              from 'react'
import React                 from 'react'

import { Layout }            from '@ui/layout'

import { wrapperActive }     from './wrapper.css.js'
import { wrapperBase }       from './wrapper.css.js'
import { wrapperInactive }   from './wrapper.css.js'

const Wrapper = memo(({ children, active }: WrapperProps) => (
  <>
    <Layout width={960} display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}>
      <div className={`${wrapperBase} ${active ? wrapperActive : wrapperInactive}`}>{children}</div>
    </Layout>
    <Layout width={335} display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }}>
      {children}
    </Layout>
  </>
))

export { Wrapper }
