import type { FC }                  from 'react'

import type { PaginationPartProps } from './pagination-part.interface.js'

import React                        from 'react'

import { Button }                   from '@ui/button'
import { ArrowLeftIcon }            from '@ui/icons'
import { ArrowRightIcon }           from '@ui/icons'
import { Row }                      from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Pagination }               from '@ui/slider'

export const PaginationPart: FC<PaginationPartProps> = ({
  activeIndex,
  controlsSwiper,
  slides,
}) => (
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
    <Pagination activeItem={activeIndex} swiper={controlsSwiper} totalItems={slides.length} />
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
)
