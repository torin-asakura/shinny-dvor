import React              from 'react'
import { FC }             from 'react'
import { useReactiveVar } from '@apollo/client'

import { Condition }      from '@ui/condition'
import { Divider }        from '@ui/divider'
import { Button }         from '@ui/button'
import { Box }            from '@ui/layout'
import { NextLink }       from '@ui/link'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'
import { chosenVar }      from '@store/chosen-radius'

import { AvailableRadii } from './available-radii'
import { ServicesList }   from './services-list'
import { ChosenRadius }   from './chosen-radius'

const Services: FC = () => {
  const isSizeChosen = useReactiveVar(chosenVar)
  return (
    <Box width='100%' justifyContent='center' id='services'>
      <Column minWidth={['100%', '100%', '1440px']}>
        <Layout flexBasis={[48, 100, 100]} />
        <Row>
          <Layout flexBasis={[20, 80, 80]} />
          <Box width='100%' justifyContent='space-between'>
            <Column display={['none', 'flex', 'flex']} width='34%'>
              <Layout>
                <Text fontWeight='medium' fontSize='giant' lignHeight='grown'>
                  Text 1
                </Text>
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Text lignHeight='grown'>Text 2</Text>
                <Layout flexBasis={24} />
              </Layout>
              <Condition match={isSizeChosen}>
                <Layout flexBasis={24} />
                <Row>
                  <ChosenRadius />
                  <Layout flexBasis={16} />
                  <NextLink href='/services'>
                    <Layout width={180}>
                      <Button color='secondary' size='large'>
                        Button
                      </Button>
                    </Layout>
                  </NextLink>
                </Row>
              </Condition>
            </Column>
            <Column width={['100%', '843px', '843px']}>
              <Column width='100%' display={['flex', 'none', 'none']}>
                <Layout>
                  <Text fontWeight='medium' fontSize='extraLarge'>
                    Text 1
                  </Text>
                </Layout>
                <Layout flexBasis={16} />
                <Layout>
                  <Text lignHeight='grown'>Text 2</Text>
                </Layout>
                <Condition match={isSizeChosen}>
                  <Layout flexBasis={24} />
                  <Row>
                    <Box width={56} height={56}>
                      <ChosenRadius />
                    </Box>
                    <Layout flexBasis={16} />
                    <Box width={180} height={56}>
                      <Button color='secondary' size='large'>
                        Button
                      </Button>
                    </Box>
                  </Row>
                </Condition>
                <Layout flexBasis={32} />
              </Column>
              <Condition match={!isSizeChosen}>
                <AvailableRadii />
                <Layout flexBasis={16} />
              </Condition>
              <Column width='100%'>
                <Condition match={isSizeChosen}>
                  <Divider color='gray' />
                </Condition>
                <ServicesList isSizeChosen={isSizeChosen} />
              </Column>
            </Column>
          </Box>
          <Layout flexBasis={[20, 80, 80]} />
        </Row>
        <Layout flexBasis={[48, 100, 100]} />
      </Column>
    </Box>
  )
}

export { Services }
