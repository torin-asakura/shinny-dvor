/* eslint-disable */

import type { WorksExamplesProps }   from './works-examples.interface.js'
import type { SlideProps }           from '@ui/slider'
import type { FC }                   from 'react'
import type { Swiper as SwiperCore } from 'swiper'

import React                         from 'react'
import { Children }                  from 'react'
import { useState }                  from 'react'
import { forwardRef }                from 'react'
import { useMemo }                   from 'react'

import { Button }                    from '@ui/button'
import { ArrowLeftIcon }             from '@ui/icons'
import { ArrowRightIcon }            from '@ui/icons'
import { Box }                       from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Pagination }                from '@ui/slider'
import { Slider }                    from '@ui/slider'
import { SwiperInstanceExporter }    from '@ui/slider'
import { Swiper }                    from '@ui/slider'
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
    <Box
      width='100%'
      height={{ mobile: '609px', tablet: '609px', desktop: '976px' }}
      // backgroundColor='$fillGray'
      backgroundColor={{ mobile: '$fillGray', tablet: '$steel', desktop: '$fillGray' }}
    >
      <Row justifyContent='center' alignItems='center' overflow='hidden'>
        <Layout flexBasis='20px' display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }} />
        <Column width='100%' alignItems='center'>
          <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '100px' }} />
          <Layout>
            <Text fontWeight='small' fontSize='giant' lineHeight='grown'>
              {title}
            </Text>
          </Layout>
          <Layout flexBasis={{ mobile: '8px', tablet: '8px', desktop: '16px' }} />
          <Layout>
            <Text fontWeight='normal' fontSize='normal' color='darkGray'>
              {subTitle}
            </Text>
          </Layout>
          <Layout flexBasis={{ mobile: '32px', tablet: '32px', desktop: '40px' }} />
          <Row
            justifyContent='center'
            alignItems='center'
            width={{ mobile: 'auto', tablet: 'auto', desktop: '1440px' }}
          >
            <Slider>
              {Children.map(sliderChildren, (child) => (
                <SwiperSlide>{child}</SwiperSlide>
              ))}
            </Slider>
          </Row>
          <Row maxWidth='200px' justifyContent='center'>
            <Layout width='32px' height='32px'>
              <Button
                color='transparent'
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
            <Layout width='32px' height='32px'>
              <Button
                color='transparent'
                size='ghost'
                onClick={(): void => {
                  controlsSwiper?.slideNext()
                }}
              >
                <ArrowRightIcon />
              </Button>
            </Layout>
          </Row>
          <Layout flexBasis={{ mobile: '80px', tablet: '80px', desktop: '100px' }} />
        </Column>
        <Layout flexBasis='20px' display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }} />
      </Row>
    </Box>
  )
})
