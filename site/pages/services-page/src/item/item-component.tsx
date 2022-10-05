import { useReactiveVar } from '@apollo/client'

import React              from 'react'
import { FC }             from 'react'

import { SERVICE }        from '@store/services'
import { ImageBlock }     from '@ui/image'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'
import { Ruble }          from '@ui/text'
import { Space }          from '@ui/text'
import { scrollTop }      from '@shared/utils'
import { radiusVar }      from '@store/chosen-radius'
import { screenVar }      from '@store/services'

import { ItemProps }      from './item.interface'

const Item: FC<ItemProps> = ({ serviceName, price, image, addon }) => {
  const radius = useReactiveVar<string>(radiusVar)

  return (
    <Box
      minWidth={['100%', '100%', 296]}
      height={[332, 332, 420]}
      marginRight={32}
      // @ts-ignore
      cursor='pointer'
    >
      <Column minWidth={['100%', '100%', 296]}>
        <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
        <Box
          width='100%'
          height={[312, 312, 388]}
          backgroundColor='transparentGray'
          onClick={() => {
            scrollTop()
            screenVar(SERVICE)
          }}
        >
          <Layout flexBasis={[24, 32, 32]} flexShrink={0} />
          <Column width='100%' alignItems='center'>
            <Layout flexBasis={32} flexShrink={0} />
            <Box minWidth={[180, 180, 232]} minHeight={[180, 180, 232]}>
              <ImageBlock src={image.sourceUrl} alt={image.altText} />
            </Box>
            <Layout flexBasis={[24, 24, 32]} flexShrink={0} />
            <Row>
              <Row width={232}>
                <Text display='inline' lineHeight='grown' fontWeight='medium' fontSize='large'>
                  {serviceName}
                  <Space />
                  {addon ? '' : radius}
                </Text>
              </Row>
            </Row>
            <Layout flexBasis={8} />
            <Row>
              <Layout width='100%'>
                <Text lineHeight='grown' fontWeight='medium' fontSize='large'>
                  {price}
                  <Space />
                  <Ruble />
                </Text>
                <Layout flexBasis={8} />
                <Text lineHeight='grown' color='darkGray' fontWeight='500' fontSize='large'>
                  {addon}
                </Text>
              </Layout>
            </Row>
            <Layout flexBasis={[24, 24, 32]} flexShrink={0} />
          </Column>
          <Layout flexBasis={[24, 24, 32]} flexShrink={0} />
        </Box>
      </Column>
    </Box>
  )
}
export { Item }
