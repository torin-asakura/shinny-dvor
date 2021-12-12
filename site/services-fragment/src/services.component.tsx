import React         from 'react'
import { FC }        from 'react'

import { Condition } from '@ui/condition'
import { Box }       from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

const Services: FC = () => {
  // TODO write isSizeChoosed helper
  const isSizeChoosed = true
  return (
    <Box width='100%' border='1px solid black'>
      <Column width='100%'>
        <Layout flexBasis={[48, 100, 100]} />
        <Row>
          <Layout flexBasis={[20, 80, 80]} />
          <Box width='100%' justifyContent='space-between'>
            <Column display={['none', 'flex', 'flex']}>
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
                  <Box width={56} height={56} border='1px solid green'>
                    Choosed radius
                  </Box>
                  <Layout flexBasis={16} />
                  <Box width={180} height={56} border='1px solid green'>
                    Button
                  </Box>
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
                <Box width='100%' height={['186px', '162px', '162px']} border='1px solid pink'>
                  <Row>
                    <Layout flexBasis={[20, 32, 32]} />
                    <Column width='100%'>
                      <Layout flexBasis={[20, 32, 32]} />
                      <Layout>
                        <Text>Text</Text>
                      </Layout>
                      <Layout flexBasis={[16, 24, 24]} />
                      <Box width='100%' height={[108, 48, 48]} border='1px solid black'>
                        Radii list
                      </Box>
                      <Layout flexBasis={[20, 32, 32]} />
                    </Column>
                    <Layout flexBasis={[20, 32, 32]} />
                  </Row>
                </Box>
                <Layout flexBasis={16} />
              </Condition>
              <Box width='100%' minHeight={[663, 789, 789]} border='1px solid black'>
                Services list
              </Box>
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
