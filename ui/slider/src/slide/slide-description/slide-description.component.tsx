import type { SlideDescriptionProps } from './slide-description.interfaces.js'

import { memo }                       from 'react'
import React                          from 'react'

import { Box }                        from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Layout }                     from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Ruble }                      from '@ui/text'
import { Space }                      from '@ui/text'
import { Text }                       from '@ui/text'

export const SlideDescription = memo(({
  description,
  priceTitle,
  price,
  timeTitle,
  time,
}: SlideDescriptionProps) => (
  <Layout display={['flex', 'flex', 'none']}>
    <Column fill>
      <Row>
        <Text lineHeight='$grown' fontSize='$normal' color='$darkGray'>
          {description}
        </Text>
      </Row>
      <Layout flexBasis='16px' />
      <Box width='100%' backgroundColor='$lightGray' height='1px' />
      <Layout flexBasis='16px' />
      <Row>
        <Layout>
          <Text fontSize='$normal' color='$darkGray'>
            {priceTitle}
          </Text>
          <Space />
          <Text fontSize='$normal' color='$black' fontWeight='$medium'>
            {price}
            <Space />
            <Ruble />
          </Text>
        </Layout>
        <Layout flexBasis='40px' />
        <Layout width='100%' justifyContent='flex-end'>
          <Text fontSize='$normal' color='$darkGray'>
            {timeTitle}
          </Text>
          <Space />
          <Text fontSize='$normal' color='$black' fontWeight='$medium'>
            {time}
          </Text>
        </Layout>
      </Row>
    </Column>
  </Layout>
))
