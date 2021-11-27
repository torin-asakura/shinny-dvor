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
        <Box width='100%' border='1px solid black' height={48} alignItems='center'>
          <Logo />
        </Box>
        <Box
          display={['none', 'flex', 'flex']}
          width='100%'
          border='1px solid black'
          height={48}
          alignItems='center'
        >
          <Navigation />
        </Box>
        <Box
          width='100%'
          border='1px solid black'
          height={48}
          justifyContent='flex-end'
          alignItems='center'
        >
          Sign up
        </Box>
        <Layout flexBasis={[20, 32, 32]} flexShrink={0} />
      </Row>
      <Layout flexBasis={[20, 28, 28]} />
    </Column>
  </Box>
)

export { Header }
