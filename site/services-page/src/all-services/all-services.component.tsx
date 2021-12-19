import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

import { Item }   from '../item'

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
    <Box maxWidth={['100%', '1440px', '1440px']}>
      <Layout flexBasis={[20, 80, 80]} />
      <Column width='100%'>
        <Layout flexBasis={[20, 32, 32]} />
        <Layout>
          <Text fontWeight='bold' fontSize={56}>
            Text
          </Text>
        </Layout>
        <Layout flexBasis={[12, 16, 16]} />
        <Row flexWrap='wrap'>
          {allServicesList.map((service) => (
            <Item service={service} />
          ))}
        </Row>
        <Layout flexBasis={[20, 80, 80]} />
      </Column>
      <Layout flexBasis={[20, 80, 80]} />
    </Box>
  )
}

export { AllServices }
