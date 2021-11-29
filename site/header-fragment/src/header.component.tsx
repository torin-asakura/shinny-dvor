import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Logo }       from '@ui/logo'
import { Navigation } from '@site/navigation-fragment'

const Header: FC = () => (
  <Box width='100%' height={[80, 104, 104]} border='1px solid black'>
    <Column width='100%'>
      <Layout flexBasis={[20, 28, 28]} />
      <Row justifyContent='space-between'>
        <Layout flexBasis={[20, 32, 32]} flexShrink={0} />
        <Row alignItems='center'>
          <Box width={24} height={24} border='1px solid blue' display={['flex', 'none', 'none']}>
            Menu
          </Box>
          <Layout flexBasis={17} display={['flex', 'none', 'none']} />
          <Box border='1px solid black' height={48} width={32} alignItems='center'>
            <Layout>
              <Logo />
            </Layout>
          </Box>
        </Row>
        <Box
          display={['none', 'flex', 'flex']}
          width='100%'
          border='1px solid black'
          height={48}
          alignItems='center'
        >
          <Navigation />
        </Box>
        <Row alignItems='center' justifyContent='flex-end'>
          <Box width={[40, 48, 48]} height={[40, 48, 48]} border='1px solid green'>
            Choosed radius
          </Box>
          <Layout flexBasis={[12, 16, 16]} />
          <Box width={[124, 137, 137]} border='1px solid black' height={48} justifyContent='center'>
            Sign up
          </Box>
        </Row>
        <Layout flexBasis={[20, 32, 32]} flexShrink={0} />
      </Row>
      <Layout flexBasis={[20, 28, 28]} />
    </Column>
  </Box>
)

export { Header }
