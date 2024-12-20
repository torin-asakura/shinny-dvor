/* eslint-disable */

import type { SlideProps }           from '@ui/slider'
import type { FC }                   from 'react'
import type { Swiper as SwiperCore } from 'swiper'

import type { WorksExamplesProps }   from './works-examples.interface.js'

import { Children }                  from 'react'
import { useState }                  from 'react'
import { forwardRef }                from 'react'
import { useMemo }                   from 'react'
import React                         from 'react'

import { Button }                    from '@ui/button'
import { ArrowLeftIcon }             from '@ui/icons'
import { ArrowRightIcon }            from '@ui/icons'
import { Box }                       from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Pagination }                from '@ui/slider'
import { Slider }                    from '@ui/slider'
import { Slide }                     from '@ui/slider'
import { SwiperSlide }               from '@ui/slider'
import { Text }                      from '@ui/text'
import { extractFragment }           from '@globals/data'
import { extractFragments }          from '@globals/data'

export const WorksExamples: FC<WorksExamplesProps> = forwardRef((
  { fragmentsData, workResultsData },
  ref: any
) => {
  const [controlsSwiper, setControlsSwiper] = useState<SwiperCore | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const { title } = extractFragment('contentAddons', 'work-examples', fragmentsData)
  const subTitle = extractFragment('contentAddons', 'work-examples', fragmentsData).content
  const priceTitle = extractFragment('contentAddons', 'price-title', fragmentsData).title
  const timeTitle = extractFragment('contentAddons', 'time-title', fragmentsData).title
  const slides = extractFragments('work-result-item', 'workResultParams', workResultsData)

  const sliderChildren = useMemo(
    () =>
      slides.map((
        {
          workResultParams: { fragmentId, photos, price, description, time },
        }: {
          workResultParams: {
            fragmentId: string
            photos: SlideProps['image']
            price: SlideProps['price']
            description: SlideProps['description']
            time: SlideProps['time']
          }
        },
        index: number
      ) => (
        <Slide
          key={`${fragmentId}-${index}`}
          description={description}
          price={price}
          time={time}
          image={photos}
          priceTitle={priceTitle}
          timeTitle={timeTitle}
          setActiveIndex={setActiveIndex}
        />
      )),
    [slides, priceTitle, timeTitle]
  )

  return (
    <Box ref={ref} width='100%' height={[609, 609, 976]} backgroundColor='$fillGray'>
      <Row justifyContent='center' alignItems='center' overflow='hidden'>
        <Layout flexBasis={20} display={['flex', 'flex', 'none']} />
        <Column width='100%' alignItems='center'>
          <Layout flexBasis={[20, 20, 100]} />
          <Layout>
            {/* TODO check <Text fontWeight='$small' fontSize='$giant' lineHeight='$grown'> */}
            <Text fontWeight='$normal' fontSize='$giant' lineHeight='$grown'>
              {title}
            </Text>
          </Layout>
          <Layout flexBasis={[8, 8, 16]} />
          <Layout>
            <Text fontWeight='$normal' fontSize='$normal' color='$darkGray'>
              {subTitle}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 40]} />
          <Row justifyContent='center' alignItems='center' width={['auto', 'auto', 1440]}>
            <Slider>
              {Children.map(sliderChildren, (child) => (
                <SwiperSlide>{child}</SwiperSlide>
              ))}
            </Slider>
          </Row>
          <Row maxWidth={200} justifyContent='center'>
            <Layout width={32} height={32}>
              <Button
                variant='transparent'
                size='ghost'
                onClick={(): void => {
                  controlsSwiper?.slidePrev()
                }}
              >
                <ArrowLeftIcon />
              </Button>
            </Layout>
            <Pagination
              activeItem={activeIndex}
              swiper={controlsSwiper}
              totalItems={sliderChildren.length}
            />
            <Layout width={32} height={32}>
              <Button
                variant='transparent'
                size='ghost'
                onClick={(): void => {
                  controlsSwiper?.slideNext()
                }}
              >
                <ArrowRightIcon />
              </Button>
            </Layout>
          </Row>
          <Layout flexBasis={[80, 80, 100]} />
        </Column>
        <Layout flexBasis={20} display={['flex', 'flex', 'none']} />
      </Row>
    </Box>
  )
})
