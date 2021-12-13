import React              from 'react'
import { FC }             from 'react'

import { Condition }      from '@ui/condition'
import { Divider }        from '@ui/divider'
import { Button }         from '@ui/button'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

import { AvailableRadii } from './available-radii'
import { ServicesList }   from './services-list'

const Services: FC = () => {
  // TODO write isSizeChoosed helper
  const isSizeChoosed = false
  return (
    <Box width='100%' border='1px solid black'>
      <Column width='100%'>
        <Layout flexBasis={[48, 100, 100]} />
        <Row>
          <Layout flexBasis={[20, 80, 80]} />
          <Box width='100%' justifyContent='space-between'>
            <Column display={['none', 'flex', 'flex']} width='34%'>
              <Layout>
                <Text fontWeight='medium' fontSize='giant'>
                  Text 1
                </Text>
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Text>Text 2</Text>
                <Layout flexBasis={24} />
              </Layout>
              <Condition match={isSizeChoosed}>
                <Layout flexBasis={24} />
                <Row>
                  <Box
                    width={56}
                    height={56}
                    backgroundColor='lightGray'
                    borderRadius='normal'
                    justifyContent='center'
                    alignItems='center'
                    flexShrink={0}
                  >
                    <Layout>
                      <Text fontWeight='bold'>R13</Text>
                    </Layout>
                  </Box>
                  <Layout flexBasis={16} />
                  <Layout width={180}>
                    <Button color='secondary' size='large'>
                      Button
                    </Button>
                  </Layout>
                </Row>
              </Condition>
            </Column>
            <Column width={['100%', '843px', '843px']}>
              <Column width='100%' display={['flex', 'none', 'none']}>
                <Layout>
                  <Text>Text 1</Text>
                </Layout>
                <Layout flexBasis={16} />
                <Layout>
                  <Text>Text 2</Text>
                </Layout>
                <Condition match={isSizeChoosed}>
                  <Layout flexBasis={24} />
                  <Row>
                    <Box width={56} height={56} border='1px solid green'>
                      Choosed radius
                    </Box>
                    <Layout flexBasis={16} />
                    <Box width={180} height={56} border='1px solid green'>
                      Button
                    </Box>
                  </Row>
                </Condition>
                <Layout flexBasis={32} />
              </Column>
              <Condition match={!isSizeChoosed}>
                <AvailableRadii />
                <Layout flexBasis={16} />
              </Condition>
              <Column width='100%' border='1px solid red'>
                <Condition match={isSizeChoosed}>
                  <Divider color='gray' />
                </Condition>
                <ServicesList />
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
