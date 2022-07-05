import React                 from 'react'
import { FC }                from 'react'
import { useState }          from 'react'
import { useEffect }         from 'react'

import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

import { Services }          from '../data'
import { Item }              from '../item'
import { useMockedServices } from '../data'

const AllServices: FC = () => {
  const { services: servicesMock } = useMockedServices()

  const [services, setServices] = useState<Services[]>([])

  useEffect(() => {
    setServices(servicesMock)
  }, [servicesMock])

  return (
    <Box maxWidth={['100%', '100%', '1440px']}>
      <Layout flexBasis={[20, 20, 80]} />
      <Column width='100%'>
        <Layout flexBasis={[20, 20, 32]} />
        <Layout>
          <Text fontWeight='bold' fontSize={56}>
            Text
          </Text>
        </Layout>
        <Layout flexBasis={[12, 12, 16]} />
        <Row flexWrap='wrap'>
          {services.map(({ id, serviceName, price }) => (
            <Item key={id} serviceName={serviceName} price={price} />
          ))}
        </Row>
        <Layout flexBasis={[20, 20, 80]} />
      </Column>
      <Layout flexBasis={[20, 20, 80]} />
    </Box>
  )
}

export { AllServices }
