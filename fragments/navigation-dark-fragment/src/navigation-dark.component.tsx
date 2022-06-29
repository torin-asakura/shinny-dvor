import { useReactiveVar }      from '@apollo/client'

import React                   from 'react'
import { FC }                  from 'react'

import { Button }              from '@ui/button'
import { Condition }           from '@ui/condition'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { NextLink }            from '@ui/link'
import { Logo }                from '@ui/logo'
import { Text }                from '@ui/text'
import { checkedRadiusVar }    from '@store/chosen-radius'

import { NavigationDarkProps } from './navigation-dark.interface'
import { NavigationList }      from './navigation-list'
import { SizeButton }          from './size-button'
import { SizeButtonCard }      from './size-button'
import { SizeButtonDropdown }  from './size-button'
import { getColor }            from './helpers'
import { getColorBackground }  from './helpers'

const NavigationDark: FC<NavigationDarkProps> = ({ active }) => {
  const checkedRadius = useReactiveVar<boolean>(checkedRadiusVar)

  return (
    <Box
      width='100%'
      zIndex={1}
      minHeight={[80, 104, 104]}
      position='fixed'
      justifyContent='center'
      backgroundColor={getColorBackground(active!)}
      style={{ transition: '.2s' }}
    >
      <Layout flexBasis={[20, 32, 32]} />
      <Box minWidth={['100%', '1440px', '1440px']}>
        <Column width='100%'>
          <Layout flexBasis={[20, 28, 28]} />
          <Row justifyContent='space-between'>
            <Box alignItems='center' width={[84, 201, 201]}>
              <Layout flexBasis={[16, 0, 0]} flexShrink={0} />
              <Layout>
                <Logo color={getColor(active!)} />
              </Layout>
            </Box>
            <Box display={['none', 'flex', 'flex']} width={410} alignItems='center'>
              <NavigationList active={active} />
            </Box>
            <Box width={[176, 201, 201]} zIndex={1}>
              <Layout display={['flex', 'none', 'none']}>
                <SizeButtonCard />
              </Layout>
              <Layout display={['none', 'flex', 'flex']} justifyContent='center'>
                <SizeButton active={active} />
                <Condition match={checkedRadius}>
                  <SizeButtonDropdown />
                </Condition>
              </Layout>
              <Layout flexBasis={16} />
              <NextLink path='/booking'>
                <Box width={[124, 137, 137]} height={[40, 48, 48]}>
                  <Layout width='100%' display={['flex', 'none', 'none']}>
                    <Button size='small'>
                      <Layout>
                        <Text fontWeight='bold'>Sign up</Text>
                      </Layout>
                    </Button>
                  </Layout>
                  <Layout width='100%' display={['none', 'flex', 'flex']}>
                    <Button>
                      <Text fontWeight='bold'>Sign up</Text>
                    </Button>
                  </Layout>
                </Box>
              </NextLink>
            </Box>
          </Row>
          <Layout flexBasis={[20, 28, 28]} />
        </Column>
      </Box>
      <Layout flexBasis={[20, 32, 32]} />
    </Box>
  )
}

export { NavigationDark }
