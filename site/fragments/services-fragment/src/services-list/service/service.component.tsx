import React            from 'react'
import { FC }           from 'react'
import { useRouter }    from 'next/router'

import { SERVICE }      from '@store/services'
import { Button }       from '@ui/button'
import { Condition }    from '@ui/condition'
import { Divider }      from '@ui/divider'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Row }          from '@ui/layout'
import { Ruble }        from '@ui/text'
import { Space }        from '@ui/text'
import { Text }         from '@ui/text'
import { screenVar }    from '@store/services'
import { serviceVar }   from '@store/services'
import { useHover }     from '@ui/utils'

import { ServiceProps } from './service.interface'
import { messages }     from '../../messages'

const Service: FC<ServiceProps> = ({
  radius,
  isSizeChosen,
  title,
  description,
  variant,
  addon,
  price,
  workexamples,
  additionalservice,
}) => {
  const route = useRouter()

  const [hover, hoverProps] = useHover()

  return (
    <Button
      size='ghost'
      color='transparent'
      disabled={!isSizeChosen}
      onClick={() => {
        screenVar(SERVICE)
        serviceVar({
          radius,
          serviceName: title,
          price: price[radius.toLowerCase()],
          addon,
          description,
          variant,
          workexamples,
          additionalservice,
        })
        route.push('/services')
      }}
    >
      <Column fill {...hoverProps}>
        <Layout flexBasis={30} />
        <Row>
          <Column fill>
            <Layout>
              <Text
                fontWeight='medium'
                fontSize='xl'
                color={hover ? 'blue' : 'black'}
                opacity={isSizeChosen ? 1 : 0.3}
              >
                {title}
              </Text>
            </Layout>
            <Layout flexBasis={8} />
            <Layout>
              <Text color='darkGray' opacity={isSizeChosen ? 1 : 0.3}>
                {description}
              </Text>
            </Layout>
          </Column>
          <Column width={200} display={['none', 'none', 'flex']}>
            <Condition match={hover as boolean}>
              <Button color='secondary' size='normal'>
                <Row justifyContent='center'>
                  <Text fontWeight='medium'>
                    {price[radius.toLowerCase()]}
                    <Space />
                    <Ruble />
                    <Space />
                    {messages.per}
                    <Space />
                    {radius}
                  </Text>
                </Row>
              </Button>
            </Condition>
          </Column>
        </Row>
        <Layout flexBasis={30} />
        <Divider backgroundColor='gray' />
      </Column>
    </Button>
  )
}

export { Service }
