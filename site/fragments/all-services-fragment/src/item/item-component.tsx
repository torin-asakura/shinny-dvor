import React          from 'react'
import { FC }         from 'react'

import { Condition }  from '@ui/condition'
import { ImageBlock } from '@ui/image'
import { Box }        from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { NextLink }   from '@ui/link'
import { Text }       from '@ui/text'
import { Ruble }      from '@ui/text'
import { Space }      from '@ui/text'
import { useHover }   from '@ui/utils'

import { ItemProps }  from './item.interface'

const Item: FC<ItemProps> = ({ uri, serviceName, price, image, addon }) => {
  const cost = price[Object.keys(price)[1]]?.passenger

  const [hover, hoverProps] = useHover()

  return (
    <Box
      minWidth={['100%', '100%', 296]}
      minHeight={[332, 332, 420]}
      marginRight={32}
      // @ts-ignore
      cursor='pointer'
    >
      <Column minWidth={['100%', '100%', 296]}>
        <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
        <NextLink path={uri}>
          <Box
            width='100%'
            minHeight={[312, 312, 388]}
            backgroundColor='transparentGray'
            {...hoverProps}
          >
            <Layout flexBasis={[24, 32, 32]} flexShrink={0} />
            <Column width='100%' alignItems='center'>
              <Layout flexBasis={32} flexShrink={0} />
              <Box minWidth={[180, 180, 232]} minHeight={[180, 180, 232]}>
                <ImageBlock src={image.sourceUrl} alt={image.altText} />
              </Box>
              <Layout flexBasis={[24, 24, 32]} flexShrink={0} />
              <Row>
                <Row width={['100%', '100%', 232]}>
                  <Text
                    color={hover ? 'blue' : 'black'}
                    display='inline'
                    lineHeight='grown'
                    fontWeight='medium'
                    fontSize='large'
                  >
                    {serviceName}
                  </Text>
                </Row>
              </Row>
              <Layout flexBasis={8} />
              <Layout width='100%'>
                <Text
                  color={hover ? 'blue' : 'black'}
                  lineHeight='grown'
                  fontWeight='medium'
                  fontSize='large'
                >
                  {cost}
                  <Space />
                  <Ruble />
                </Text>
                <Layout flexBasis={8} />
                <Condition match={!!addon.length}>
                  <Box backgroundColor='lightGray' padding='4px 7px' borderRadius='normal'>
                    <Text lineHeight='grown' color='darkGray' fontSize='atom'>
                      {addon}
                    </Text>
                  </Box>
                </Condition>
              </Layout>
              <Layout flexBasis={[24, 24, 32]} flexShrink={0} />
            </Column>
            <Layout flexBasis={[24, 24, 32]} flexShrink={0} />
          </Box>
        </NextLink>
      </Column>
    </Box>
  )
}
export { Item }
