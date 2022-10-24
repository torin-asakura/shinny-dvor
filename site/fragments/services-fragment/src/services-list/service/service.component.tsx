import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useRouter }        from 'next/router'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Ruble }            from '@ui/text'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

import { ServiceProps }     from './service.interface'

const Service: FC<ServiceProps> = ({ uri, title, description, price }) => {
  const route = useRouter()
  const [hover, hoverProps] = useHover()

  const cost = price[Object.keys(price)[1]]?.passenger

  return (
    <Button
      size='ghost'
      color='transparent'
      onClick={() => {
        route.push(uri)
      }}
    >
      <Column fill {...hoverProps}>
        <Layout flexBasis={30} />
        <Row>
          <Column fill>
            <Layout>
              <Text fontWeight='medium' fontSize='xl' color={hover ? 'blue' : 'black'}>
                {title}
              </Text>
            </Layout>
            <Layout flexBasis={8} />
            <Layout>
              <Text color='darkGray'>{description}</Text>
            </Layout>
          </Column>
          <Column width={200} display={['none', 'none', 'flex']}>
            <Condition match={hover as boolean}>
              <Button color='secondary' size='normal'>
                <Row justifyContent='center'>
                  <Text fontWeight='medium'>
                    <FormattedMessage id='service.by' defaultMessage='от' />
                    <Space />
                    {cost}
                    <Space />
                    <Ruble />
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
