import type { FC }                 from 'react'
import type { ForwardedRef }       from 'react'

import type { WorksExamplesProps } from './works-examples.interface.js'

import { forwardRef }              from 'react'
import React                       from 'react'

import { Box }                     from '@ui/layout'
import { Row }                     from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Column }                  from '@ui/layout'

import { PaginationPart }          from './pagination-part/index.js'
import { SliderPart }              from './slider-part/index.js'
import { TitlePart }               from './title-part/index.js'
import { useWorkExamplesFragment } from './hooks/index.js'

export const WorksExamples: FC<WorksExamplesProps> = forwardRef((
  { fragmentsData, workResultsData, isYandexTurbo },
  ref: ForwardedRef<null>
) => {
  const {
    controlsSwiper,
    setControlsSwiper,
    activeIndex,
    setActiveIndex,
    title,
    subTitle,
    priceTitle,
    timeTitle,
    slides,
  } = useWorkExamplesFragment({ fragmentsData, workResultsData })

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
            isYandexTurbo={isYandexTurbo}
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
