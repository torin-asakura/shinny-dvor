import React         from 'react'
import { FC }        from 'react'

import { Button }    from '@ui/button'
import { Divider }   from '@ui/divider'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

import { ItemProps } from './services-list.interface'

const ServicesList: FC<ItemProps> = ({ isSizeChosen, services }) => (
  <>
    {services.map(({ title, description }) => (
      <Button size='ghost' color='transparent' disabled={!isSizeChosen}>
        <Column width='100%'>
          <Layout flexBasis={30} />
          <Layout>
            <Text fontWeight='medium' fontSize='xl' color='black' opacity={isSizeChosen ? 1 : 0.3}>
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

export { ServicesList }
