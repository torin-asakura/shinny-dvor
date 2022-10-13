import React                       from 'react'
import { Children }                from 'react'
import { FC }                      from 'react'
import { useEffect }               from 'react'
import { useState }                from 'react'
import { forwardRef }              from 'react'

import { Button }                  from '@ui/button'
import { ArrowLeftIcon }           from '@ui/icons'
import { ArrowRightIcon }          from '@ui/icons'
import { Image }                   from '@ui/image'
import { Box }                     from '@ui/layout'
import { Row }                     from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Pagination }              from '@ui/slider'
import { Slider }                  from '@ui/slider'
import { Swiper as SwiperCore }    from '@ui/slider'
import { Slide }                   from '@ui/slider'
import { SwiperSlide }             from '@ui/slider'
import { Text }                    from '@ui/text'
import { extractFragment }         from '@globals/data'
import { useSwiper }               from '@ui/slider'

import { Slide as SlideInterface } from './data'
import { WorksExamplesProps }      from './works-examples.interface'
import { useMockedSlides }         from './data'

const WorksExamples: FC<WorksExamplesProps> = forwardRef(({ fragmentsData }, ref: any) => {
  const { slides } = useMockedSlides()

  const [slide, setSlide] = useState<SlideInterface[]>([])

  const [desktopControlsSwiper, setDesktopControlsSwiper] = useState<SwiperCore | null>(null)
  const [tabletControlsSwiper, setTabletControlsSwiper] = useState<SwiperCore | null>(null)
  const [mobileControlsSwiper, setMobileControlsSwiper] = useState<SwiperCore | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    setSlide([...slides])
  }, [slides])

  const { title } = extractFragment('contentAddons', 'work-examples', fragmentsData)
  const subTitle = extractFragment('contentAddons', 'work-examples', fragmentsData).content

  const sliderChildren = slide.map(({ id, alt, image, price, description, timeOfExecution }) => (
    <Slide
      key={id}
      setActiveIndex={setActiveIndex}
      description={description}
      price={price}
      time={timeOfExecution}
      image={image}
    >
      <Image src={image.firstImage} alt={alt} radius={16} />
    </Slide>
  ))

  const CarouselControlsExporter = ({ swiper, setSwiper }) => {
    const swiperInstance = useSwiper()

    if (!swiper) setSwiper(swiperInstance)

    return null
  }

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
          <Row display={['none', 'none', 'flex']}>
            <Slider slidesPerView={1.5} initialSlide={2} spaceBetween={40}>
              <CarouselControlsExporter
                swiper={desktopControlsSwiper}
                setSwiper={setDesktopControlsSwiper}
              />
              {Children.map(sliderChildren, (child) => (
                <SwiperSlide>{child}</SwiperSlide>
              ))}
            </Slider>
          </Row>
          <Row display={['none', 'flex', 'none']}>
            <Slider height={345} slidesPerView={2} initialSlide={2} spaceBetween={40}>
              <CarouselControlsExporter
                swiper={tabletControlsSwiper}
                setSwiper={setTabletControlsSwiper}
              />
              {Children.map(sliderChildren, (child) => (
                <SwiperSlide>{child}</SwiperSlide>
              ))}
            </Slider>
          </Row>
          <Row display={['flex', 'none', 'none']}>
            <Slider height={345} slidesPerView={1} initialSlide={2} spaceBetween={0}>
              <CarouselControlsExporter
                swiper={mobileControlsSwiper}
                setSwiper={setMobileControlsSwiper}
              />
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
                  desktopControlsSwiper?.slidePrev()
                  mobileControlsSwiper?.slidePrev()
                  tabletControlsSwiper?.slidePrev()
                }}
              >
                <ArrowLeftIcon />
              </Button>
            </Layout>
            <Pagination activeItem={activeIndex} totalItems={sliderChildren.length} />
            <Layout width={32} height={32}>
              <Button
                color='transparent'
                size='ghost'
                onClick={() => {
                  desktopControlsSwiper?.slideNext()
                  mobileControlsSwiper?.slideNext()
                  tabletControlsSwiper?.slideNext()
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
