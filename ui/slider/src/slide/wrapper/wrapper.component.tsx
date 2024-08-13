import styled                from '@emotion/styled'
import React                 from 'react'

import { Layout }            from '@ui/layout'
import { Box }               from '@ui/layout'

import { baseWrapperStyles } from './wrapper.styles.js'

const DesktopWrapper = styled(Box)(baseWrapperStyles)

const Wrapper = ({ children, active }) => (
  <>
    <Layout width={960} display={['none', 'none', 'flex']}>
      <DesktopWrapper active={active}>{children}</DesktopWrapper>
    </Layout>
    <Layout width={335} display={['flex', 'flex', 'none']}>
      {children}
    </Layout>
  </>
)

export { Wrapper }
