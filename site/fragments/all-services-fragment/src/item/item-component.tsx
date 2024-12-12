import type { ItemProps }   from './item.interface.js'
import type { FC }          from 'react'

import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { motion }           from 'framer-motion'

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

// TODO check
const BoxContainer = Box.withComponent(motion.div)

export const Item: FC<ItemProps> = ({ averagePrice, serviceName, price, image, addon }) => {
  const cost = price[Object.keys(price)[1]]?.passenger

  const [hover, hoverProps] = useHover()

  return (
    <BoxContainer
      minWidth={{ mobile: '100%', tablet: '100%', desktop: '296px' }}
      // eslint-disable-next-line
      // @ts-ignore
      cursor='pointer'
      whileHover={{ translateY: -10 }}
      transition={{ duration: 0.15, ease: 'linear' }}
    >
      <Column minWidth={{ mobile: '100%', tablet: '100%', desktop: '296px' }}>
        <Box
          width='100%'
          minHeight={{ mobile: '312px', tablet: '312px', desktop: '414px' }}
          backgroundColor='$transparentGray'
          position='relative'
          {...hoverProps}
        >
          <Box
            backgroundColor='$lightBlue'
            padding='4px 6px'
            borderRadius='$leftSide'
            position='absolute'
            top='16px'
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
          <Layout flexBasis={{ mobile: '24px', tablet: '32px', desktop: '32px' }} flexShrink={0} />
          <Column fill alignItems='center'>
            <Layout flexBasis='32px' flexShrink={0} />
            <Box
              minWidth={{ mobile: '180px', tablet: '180px', desktop: '232px' }}
              minHeight={{ mobile: '180px', tablet: '180px', desktop: '232px' }}
            >
              <ImageBlock width={232} height={232} src={image.sourceUrl} alt={image.altText} />
            </Box>
            <Layout
              flexBasis={{ mobile: '24px', tablet: '24px', desktop: '32px' }}
              flexShrink={0}
            />
            <Row>
              <Row width={{ mobile: '100%', tablet: '100%', desktop: '232px' }} height={52}>
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
                <Box backgroundColor='$lightGray' padding='4px 7px' borderRadius='$normal'>
                  <Text lineHeight='grown' color='darkGray' fontSize='atom'>
                    {addon}
                  </Text>
                </Box>
              </Condition>
            </Layout>
            <Layout
              flexBasis={{ mobile: '24px', tablet: '24px', desktop: '32px' }}
              flexShrink={0}
            />
          </Column>
          <Layout flexBasis={{ mobile: '24px', tablet: '24px', desktop: '32px' }} flexShrink={0} />
        </Box>
      </Column>
    </BoxContainer>
  )
}
