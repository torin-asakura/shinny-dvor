import type { FC }          from 'react'

import type { ItemProps }   from './item.interface.js'

import { FormattedMessage } from 'react-intl'
import { motion }           from 'framer-motion'
import React                from 'react'

import { Condition }        from '@ui/condition'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Ruble }            from '@ui/text'
import { Space }            from '@ui/text'
import { useHover }         from '@ui/utils'

const BoxContainer = Box.withComponent(motion.div)

const Item: FC<ItemProps> = ({ averagePrice, serviceName, price, image, addon }) => {
  const cost = price[Object.keys(price)[1]]?.passenger

  const [hover, hoverProps] = useHover()

  return (
    <BoxContainer
      minWidth={['100%', '100%', 296]}
      // eslint-disable-next-line
      // @ts-ignore
      cursor='pointer'
      whileHover={{ translateY: -10 }}
      transition={{ duration: 0.15, ease: 'linear' }}
    >
      <Column minWidth={['100%', '100%', 296]}>
        <Box
          width='100%'
          minHeight={[312, 312, 414]}
          backgroundColor='transparentGray'
          position='relative'
          {...hoverProps}
        >
          <Box
            backgroundColor='lightBlue'
            padding='4px 6px'
            borderRadius='leftSide'
            position='absolute'
            top={16}
            right={0}
          >
            <Text fontSize='atom' color='primaryBlue'>
              <FormattedMessage id='all_services.average_price' defaultMessage='в среднем' />
              <Space />
              {averagePrice}
              <Space />
              <Ruble />
            </Text>
          </Box>
          <Layout flexBasis={[24, 32, 32]} flexShrink={0} />
          <Column fill alignItems='center'>
            <Layout flexBasis={32} flexShrink={0} />
            <Box minWidth={[180, 180, 232]} minHeight={[180, 180, 232]}>
              <ImageBlock width={232} height={232} src={image.sourceUrl} alt={image.altText} />
            </Box>
            <Layout flexBasis={[24, 24, 32]} flexShrink={0} />
            <Row>
              <Row width={['100%', '100%', 232]} height={52}>
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
              <Condition match={!!addon}>
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
      </Column>
    </BoxContainer>
  )
}
export { Item }
