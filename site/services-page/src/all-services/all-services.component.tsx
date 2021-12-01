import React         from 'react'
import { FC }        from 'react'

import { screenVar } from '@store/services'
import { SERVICE }   from '@store/services'
import { Box }       from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

const AllServices: FC = () => {
  // TODO add actual allServicesList
  const allServicesList = [
    'Service 1',
    'Service 2',
    'Service 3',
    'Service 4',
    'Service 3',
    'Service 3',
  ]
  return (
    <Box width='100%' border='1px solid green'>
      <Layout flexBasis={[20, 80, 80]} />
      <Column width='100%'>
        <Layout flexBasis={[20, 32, 32]} />
        <Layout>
          <Text>Text</Text>
        </Layout>
        <Layout flexBasis={[12, 16, 16]} />
        <Row flexWrap='wrap'>
          {allServicesList.map((service) => (
            <>
              <Column width={['100%', 296, 296]}>
                <Layout flexBasis={[20, 32, 32]} />
                <Box
                  width='100%'
                  height={[312, 388, 388]}
                  border='1px solid green'
                  onClick={() => screenVar(SERVICE)}
                >
                  <Layout flexBasis={[24, 32, 32]} />
                  <Column width='100%'>
                    <Layout flexBasis={32} />
                    <Box width='100%' height={[180, 232, 232]} border='1px solid pink'>
                      Pic
                    </Box>
                    <Layout flexBasis={[24, 32, 32]} />
                    <Layout>
                      <Text> {service}</Text>
                    </Layout>
                    <Layout flexBasis={8} />
                    <Layout>
                      <Text>Text</Text>
                    </Layout>
                    <Layout flexBasis={[24, 32, 32]} />
                  </Column>
                  <Layout flexBasis={[24, 32, 32]} />
                </Box>
              </Column>
              <Layout flexBasis={[0, 32, 32]} />
            </>
          ))}
        </Row>
        <Layout flexBasis={[20, 80, 80]} />
      </Column>
      <Layout flexBasis={[20, 80, 80]} />
    </Box>
  )
}

export { AllServices }
