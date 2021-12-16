import React          from 'react'
import { FC }         from 'react'

import { screenVar }  from '@store/services'
import { SERVICE }    from '@store/services'
import { Box }        from '@ui/layout'
import { Row }        from '@ui/layout'
import { ImageBlock } from '@ui/image'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'
import { ItemProps }  from './item.interface'

const Item: FC<ItemProps> = ({ service }) => (
  <Box width={['100%', 296, 296]} height={[332, 420, 420]}>
    <Column width={['100%', '296px', '296px']}>
      <Layout flexBasis={[20, 32, 32]} flexShrink={0} />
      <Box
        width='100%'
        height={[312, 388, 388]}
        backgroundColor='transparentGray'
        onClick={() => screenVar(SERVICE)}
      >
        <Layout flexBasis={[24, 32, 32]} />
        <Column width='100%' alignItems='center'>
          <Layout flexBasis={32} />
          <Box width={[180, 232, 232]} height={[180, 232, 232]}>
            <ImageBlock />
          </Box>
          <Layout flexBasis={[24, 32, 32]} />
          <Row>
            <Layout>
              <Text fontWeight='medium' fontSize='large'>
                {service}
              </Text>
            </Layout>
          </Row>
          <Layout flexBasis={8} />
          <Row>
            <Layout>
              <Text fontWeight='medium' fontSize='large'>
                Text
              </Text>
            </Layout>
          </Row>
          <Layout flexBasis={[24, 32, 32]} />
        </Column>
        <Layout flexBasis={[24, 32, 32]} />
      </Box>
    </Column>
    <Layout flexBasis={[0, 32, 32]} />
  </Box>
)

export { Item }
