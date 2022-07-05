import React          from 'react'
import { FC }         from 'react'

import { SERVICE }    from '@store/services'
import { ImageBlock } from '@ui/image'
import { Box }        from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'
import { Ruble }      from '@ui/text'
import { Space }      from '@ui/text'
import { screenVar }  from '@store/services'

import { ItemProps }  from './item.interface'

const Item: FC<ItemProps> = ({ serviceName, price }) => (
  <Box width={['100%', '100%', 296]} height={[332, 332, 420]}>
    <Column width={['100%', '100%', '296px']}>
      <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
      <Box
        width='100%'
        height={[312, 312, 388]}
        backgroundColor='transparentGray'
        onClick={() => screenVar(SERVICE)}
      >
        <Layout flexBasis={[24, 32, 32]} />
        <Column width='100%' alignItems='center'>
          <Layout flexBasis={32} />
          <Box width={[180, 180, 232]} height={[180, 180, 232]}>
            <ImageBlock />
          </Box>
          <Layout flexBasis={[24, 24, 32]} />
          <Row>
            <Layout>
              <Text fontWeight='medium' fontSize='large'>
                {serviceName}
              </Text>
            </Layout>
          </Row>
          <Layout flexBasis={8} />
          <Row>
            <Layout width='100%'>
              <Text fontWeight='medium' fontSize='large'>
                {price}
                <Space />
                <Ruble />
              </Text>
              <Layout flexBasis={8} />
              <Text color='darkGray' fontWeight='500' fontSize='large'>
                за см2
              </Text>
            </Layout>
          </Row>
          <Layout flexBasis={[24, 24, 32]} />
        </Column>
        <Layout flexBasis={[24, 24, 32]} />
      </Box>
    </Column>
    <Layout flexBasis={[0, 0, 32]} />
  </Box>
)

export { Item }
