import styled                  from '@emotion/styled'
import { SplideSlide }         from '@splidejs/react-splide'

import React                   from 'react'
import { FC }                  from 'react'
import { useEffect }           from 'react'

import { Divider }             from '@ui/divider'
import { Box }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'
import { Space }               from '@ui/text'
import { Ruble }               from '@ui/text'

import { SlideProps }          from './slide.interface'
import { useStore }            from '../context'
import { messages }            from '../messages'
import { baseContainerStyles } from './styles'

const Container = styled(Box)(baseContainerStyles)

const Slide: FC<SlideProps> = ({ children, description, price, time }) => {
  const [, value, suffix] = new Intl.RelativeTimeFormat('ru').format(time, 'day').split(' ')

  return (
    <SplideSlide>
      <Layout width={['100%', '100%', 960]}>
        <Column fill>
          <Container width={['100%', '100%', 960]} height={[240, 240, 540]}>
            {children}
          </Container>
          <Layout flexBasis={20} flexShrink={0} />
          <Row display={['none', 'none', 'flex']}>
            <Layout>
              <Text fontSize='normal' color='darkGray'>
                {description}
              </Text>
            </Layout>
            <Layout flexGrow={1} />
            <Layout>
              <Text fontSize='normal' color='darkGray'>
                {messages.cost}
              </Text>
              <Space />
              <Text fontSize='normal' color='black' fontWeight='medium'>
                {price}
                <Space />
                <Ruble />
              </Text>
            </Layout>
            <Layout flexBasis={40} />
            <Layout>
              <Text fontSize='normal' color='darkGray'>
                {messages.time}
              </Text>
              <Space />
              <Text fontSize='normal' color='black' fontWeight='medium'>
                {value}
                <Space />
                {suffix}
              </Text>
            </Layout>
          </Row>
          <Layout display={['flex', 'flex', 'none']}>
            <Column fill>
              <Row>
                <Text fontSize='normal' color='darkGray'>
                  {description}
                </Text>
              </Row>
              <Layout flexBasis={16} />
              <Row>
                <Divider color='lightGray' />
              </Row>
              <Layout flexBasis={16} />
              <Row>
                <Layout>
                  <Text fontSize='normal' color='darkGray'>
                    {messages.cost}
                  </Text>
                  <Space />
                  <Text fontSize='normal' color='black' fontWeight='medium'>
                    {price}
                    <Space />
                    <Ruble />
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Text fontSize='normal' color='darkGray'>
                    {messages.time}
                  </Text>
                  <Space />
                  <Text fontSize='normal' color='black' fontWeight='medium'>
                    {value}
                    <Space />
                    {suffix}
                  </Text>
                </Layout>
              </Row>
            </Column>
          </Layout>
        </Column>
      </Layout>
    </SplideSlide>
  )
}
export { Slide }
