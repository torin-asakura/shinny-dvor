import React         from 'react'
import { FC }        from 'react'

import { Button }    from '@ui/button'
import { Divider }   from '@ui/divider'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

import { services }  from '../../../data'
import { ItemProps } from './services-list.interface'

const ServicesList: FC<ItemProps> = ({ isSizeChosen }) => (
  <>
    {services.map((item) => (
      <Button size='ghost' color='transparent'>
        <Column width='100%'>
          <Layout flexBasis={30} />
          <Layout>
            <Text fontWeight='medium' fontSize='xl' color='black' opacity={isSizeChosen ? 1 : 0.3}>
              {item.name}
            </Text>
          </Layout>
          <Layout flexBasis={8} />
          <Layout>
            <Text color='darkGray' opacity={isSizeChosen ? 1 : 0.3}>
              {item.description}
            </Text>
          </Layout>
          <Layout flexBasis={30} />
          <Divider color='gray' />
        </Column>
      </Button>
    ))}
  </>
)

export { ServicesList }
