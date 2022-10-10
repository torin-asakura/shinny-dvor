import { useReactiveVar } from '@apollo/client'

import React              from 'react'
import { FC }             from 'react'
import { useRouter }      from 'next/router'

import { SERVICE }        from '@store/services'
import { Button }         from '@ui/button'
import { Divider }        from '@ui/divider'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'
import { radiusVar }      from '@store/chosen-radius'
import { screenVar }      from '@store/services'
import { serviceVar }     from '@store/services'

import { ItemProps }      from './services-list.interface'

const ServicesList: FC<ItemProps> = ({ isSizeChosen, services }) => {
  const route = useRouter()

  const radius = useReactiveVar<string>(radiusVar)

  return (
    <>
      {services.map(({
        title,
        description,
        variant,
        addon,
        price,
        workexamples,
        additionalservice,
      }) => (
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
          <Column width='100%'>
            <Layout flexBasis={30} />
            <Layout>
              <Text
                fontWeight='medium'
                fontSize='xl'
                color='black'
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
            <Layout flexBasis={30} />
            <Divider backgroundColor='gray' />
          </Column>
        </Button>
      ))}
    </>
  )
}

export { ServicesList }
