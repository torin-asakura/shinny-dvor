import React                       from 'react'
import { Children }                from 'react'
import { FC }                      from 'react'
import { Swiper as SwiperCore }    from 'swiper'
import { useEffect }               from 'react'
import { useState }                from 'react'
import { forwardRef }              from 'react'

import { Button }                  from '@ui/button'
import { ArrowLeftIcon }           from '@ui/icons'
import { ArrowRightIcon }          from '@ui/icons'
import { Box }                     from '@ui/layout'
import { Row }                     from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Pagination }              from '@ui/slider'
import { Slider }                  from '@ui/slider'
import { SwiperInstanceExporter }  from '@ui/slider'
import { Slide }                   from '@ui/slider'
import { SwiperSlide }             from '@ui/slider'
import { Text }                    from '@ui/text'
import { extractFragment }         from '@globals/data'

import { Slide as SlideInterface } from './data'
import { WorksExamplesProps }      from './works-examples.interface'
import { useMockedSlides }         from './data'

const WorksExamples: FC<WorksExamplesProps> = forwardRef(({ fragmentsData }, ref: any) => {
  const { slides } = useMockedSlides()

  const [slide, setSlide] = useState<SlideInterface[]>([])

  const [controlsSwiper, setControlsSwiper] = useState<SwiperCore | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    setSlide([...slides])
  }, [slides])

  const { title } = extractFragment('contentAddons', 'work-examples', fragmentsData)
  const subTitle = extractFragment('contentAddons', 'work-examples', fragmentsData).content

  const sliderChildren = slide.map(({ id, image, price, description, timeOfExecution }) => (
    <Slide
      key={id}
      setActiveIndex={setActiveIndex}
      description={description}
      price={price}
      time={timeOfExecution}
      image={image}
    />
  ))

  return (
    <Box width='100%' height={[609, 609, 976]} backgroundColor='fillGray' ref={ref}>
      <Row justifyContent='center' alignItems='center' overflow='hidden'>
        <Layout flexBasis={20} display={['flex', 'flex', 'none']} />
        <Column width='100%' alignItems='center'>
          <Layout flexBasis={[20, 20, 100]} />
          <Layout>
            <Text fontWeight='small' fontSize='giant' lignHeight='grown'>
              {title}
            </Text>
          </Layout>
          <Layout flexBasis={[8, 8, 16]} />
          <Layout>
            <Text fontWeight='normal' fontSize='normal' color='darkGray'>
              {subTitle}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 40]} />
          <Row justifyContent='center' alignItems='center' width={['auto', 'auto', 1440]}>
            <Slider>
              <SwiperInstanceExporter swiper={controlsSwiper} setSwiper={setControlsSwiper} />
              {Children.map(sliderChildren, (child) => (
                <SwiperSlide>{child}</SwiperSlide>
              ))}
            </Slider>
          </Row>
          <Row maxWidth={200} justifyContent='center'>
            <Layout width={32} height={32}>
              <Button
                color='transparent'
                size='ghost'
                onClick={() => {
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
                color='transparent'
                size='ghost'
                onClick={() => {
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

export { WorksExamples }
