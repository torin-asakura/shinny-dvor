import type { WorksExamplesProps }   from './works-examples.interface.js'
import type { FC }                   from 'react'
import type { Swiper as SwiperCore } from 'swiper'

import React                         from 'react'
import { useState }                  from 'react'
import { forwardRef }                from 'react'

import { Box }                       from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Column }                    from '@ui/layout'
import { extractFragment }           from '@globals/data'
import { extractFragments }          from '@globals/data'

import { PaginationPart }            from './pagination-part/index.js'
import { SliderPart }                from './slider-part/index.js'
import { TitlePart }                 from './title-part/index.js'

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

  return (
    <Box ref={ref} width='100%' height={[609, 609, 976]} backgroundColor='$fillGray'>
      <Row paddingX={[20, 20, 0]} justifyContent='center' alignItems='center' overflow='hidden'>
        <Column
          paddingTop={[20, 20, 100]}
          paddingBottom={[80, 80, 100]}
          width='100%'
          alignItems='center'
        >
          <TitlePart title={title} subTitle={subTitle} />
          <Layout flexBasis={[32, 32, 40]} />

          <SliderPart
            slides={slides}
            setControlsSwiper={setControlsSwiper}
            priceTitle={priceTitle}
            timeTitle={timeTitle}
            setActiveIndex={setActiveIndex}
          />

          <PaginationPart
            activeIndex={activeIndex}
            controlsSwiper={controlsSwiper}
            slides={slides}
          />
        </Column>
      </Row>
    </Box>
  )
})
