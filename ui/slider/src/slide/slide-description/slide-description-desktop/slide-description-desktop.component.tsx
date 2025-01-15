import type { SlideDescriptionProps } from '../slide-description.interfaces.js'

import { memo }                       from 'react'
import React                          from 'react'

import { Layout }                     from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Ruble }                      from '@ui/text'
import { Space }                      from '@ui/text'
import { Text }                       from '@ui/text'

export const SlideDescriptionDesktop = memo(({
  description,
  priceTitle,
  price,
  timeTitle,
  time,
}: SlideDescriptionProps) => (
  <Row display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}>
    <Layout>
      <Text fontSize='$normal.reduced' color='$darkGray'>
        {description}
      </Text>
    </Layout>
    <Layout flexGrow='1' />
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
    <Layout>
      <Text fontSize='$normal' color='$darkGray'>
        {timeTitle}
      </Text>
      <Space />
      <Text fontSize='$normal' color='$black' fontWeight='$medium'>
        {time}
      </Text>
    </Layout>
  </Row>
))
