import type { FC }                          from 'react'

import { useSwiperSlide }                   from '@atls-ui-parts/swiper'
import { useSwiper }                        from '@atls-ui-parts/swiper'
import styled                               from '@emotion/styled'
import { default as BaseReactCompareImage } from 'react-compare-image'
import { useEffect }                        from 'react'
import React                                from 'react'

import { Condition }                        from '@ui/condition'
import { Layout }                           from '@ui/layout'
import { Box }                              from '@ui/layout'
import { Column }                           from '@ui/layout'
import { Row }                              from '@ui/layout'
import { Text }                             from '@ui/text'
import { Space }                            from '@ui/text'
import { Ruble }                            from '@ui/text'

import { Handle }                           from '../handle/index.js'
import { SlideProps }                       from './slide.interface.js'
import { Wrapper }                          from './wrapper/index.js'
import { baseContainerStyles }              from './styles/index.js'

const Container = styled(Box)(baseContainerStyles)

const ReactCompareImage = BaseReactCompareImage as unknown as FC<any>

const Slide: FC<SlideProps> = ({
  description,
  setActiveIndex,
  price,
  time,
  image,
  priceTitle,
  timeTitle,
}) => {
  const swiperSlide = useSwiperSlide()
  const swiper = useSwiper()

  useEffect(() => {
    setActiveIndex(swiper.realIndex)
  }, [swiper.realIndex, setActiveIndex])

  return (
    <Wrapper active={swiperSlide.isActive}>
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
                leftImage={image.firstPhoto.sourceUrl}
                rightImage={image.secondPhoto.sourceUrl}
                sliderPositionPercentage={0.49}
                rightImageCss={{ objectFit: 'fill', objectPosition: 'center' }}
                leftImageCss={{ objectFit: 'fill', objectPosition: 'center' }}
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
                handle={swiperSlide.isActive ? <Handle /> : null}
                leftImage={image.firstPhoto.sourceUrl}
                rightImage={image.secondPhoto.sourceUrl}
                sliderPositionPercentage={0.4}
                rightImageCss={{ objectFit: 'fill', objectPosition: 'center' }}
                leftImageCss={{ objectFit: 'fill', objectPosition: 'center' }}
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
                {priceTitle}
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
                {timeTitle}
              </Text>
              <Space />
              <Text fontSize='normal' color='black' fontWeight='medium'>
                {time}
              </Text>
            </Layout>
          </Row>
        </Condition>
        <Layout display={['flex', 'flex', 'none']}>
          <Column fill>
            <Row>
              <Text lineHeight='grown' fontSize='normal' color='darkGray'>
                {description}
              </Text>
            </Row>
            <Layout flexBasis={16} />
            <Box width='100%' backgroundColor='lightGray' height={1} />
            <Layout flexBasis={16} />
            <Row>
              <Layout>
                <Text fontSize='normal' color='darkGray'>
                  {priceTitle}
                </Text>
                <Space />
                <Text fontSize='normal' color='black' fontWeight='medium'>
                  {price}
                  <Space />
                  <Ruble />
                </Text>
              </Layout>
              <Layout flexBasis={40} />
              <Layout width='100%' justifyContent='flex-end'>
                <Text fontSize='normal' color='darkGray'>
                  {timeTitle}
                </Text>
                <Space />
                <Text fontSize='normal' color='black' fontWeight='medium'>
                  {time}
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
