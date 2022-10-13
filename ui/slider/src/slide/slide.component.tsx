import styled                  from '@emotion/styled'
import { useSwiper }           from '@atls-ui-parts/swiper'
import { useSwiperSlide }      from '@atls-ui-parts/swiper'

import React                   from 'react'
import ReactCompareImage       from 'react-compare-image'
import { FC }                  from 'react'
import { useEffect }           from 'react'

import { Condition }           from '@ui/condition'
import { Divider }             from '@ui/divider'
import { Layout }              from '@ui/layout'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'
import { Space }               from '@ui/text'
import { Ruble }               from '@ui/text'
import { useIsMobile }         from '@ui/utils'

import { Handle }              from '../handle'
import { SlideProps }          from './slide.interface'
import { messages }            from '../messages'
import { baseContainerStyles } from './styles'
import { baseWrapperStyles }   from './wrapper'

const Container = styled(Box)(baseContainerStyles)
const Wrapper = styled(Layout)(baseWrapperStyles)

const Slide: FC<SlideProps> = ({ description, price, time, image, setActiveIndex }) => {
  const [, value, suffix] = new Intl.RelativeTimeFormat('ru').format(time, 'day').split(' ')
  const swiperSlide = useSwiperSlide()
  const swiper = useSwiper()
  const isMobile = useIsMobile()

  useEffect(() => {
    setActiveIndex(swiper.snapIndex)
  }, [swiper.snapIndex, setActiveIndex])

  return (
    <Wrapper width={[335, 335, 960]} active={swiperSlide.isActive} isMobile={isMobile}>
      <Column fill>
        <Container width={['100%', '100%', 960]} height={[240, 240, 540]}>
          <Box>
            <Box
              width={960}
              display={['none', 'none', 'flex']}
              justifyContent='center'
              alignItems='center'
            >
              <ReactCompareImage
                handle={swiperSlide.isActive ? <Handle /> : null}
                sliderLineWidth={swiperSlide.isActive ? 2 : 0}
                leftImage={image.firstImage}
                rightImage={image.secondImage}
                sliderPositionPercentage={0.5}
                rightImageCss={{ objectFit: 'contain', objectPosition: 'top' }}
                leftImageCss={{ objectFit: 'contain', objectPosition: 'top' }}
                sliderLineColor='linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 27.6%, #FFFFFF 71.87%, rgba(255, 255, 255, 0.2) 100%)'
              />
            </Box>
            <Box
              width={425}
              display={['flex', 'flex', 'none']}
              justifyContent='center'
              alignItems='center'
            >
              <ReactCompareImage
                handle={<Handle />}
                leftImage={image.firstImage}
                rightImage={image.secondImage}
                sliderPositionPercentage={0.4}
                rightImageCss={{ objectFit: 'contain', objectPosition: 'top' }}
                leftImageCss={{ objectFit: 'contain', objectPosition: 'top' }}
                sliderLineColor='linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 27.6%, #FFFFFF 71.87%, rgba(255, 255, 255, 0.2) 100%)'
              />
            </Box>
          </Box>
        </Container>
        <Layout flexBasis={20} flexShrink={0} />
        <Condition match={swiperSlide.isActive}>
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
        </Condition>
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
        <Layout flexBasis={40} />
      </Column>
    </Wrapper>
  )
}

export { Slide }
