/* eslint-disable consistent-return */

import type { FC }              from 'react'

import type { PaginationProps } from './pagination.interface.js'

import { useEffect }            from 'react'
import { useState }             from 'react'
import { memo }                 from 'react'
import { useMemo }              from 'react'
import React                    from 'react'

import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'

import { TransitionContainer }  from '../transition-container/index.js'

const Pagination: FC<PaginationProps> = memo(({ activeItem = 0, totalItems, swiper }) => {
  const [internalActiveItem, setInternalActiveItem] = useState<number>(activeItem)

  const calculatedActiveItem = useMemo(
    (): number =>
      internalActiveItem >= 0 && internalActiveItem < totalItems ? internalActiveItem : 0,
    [internalActiveItem, totalItems]
  )

  const handleClick = (index: number): void => {
    if (swiper) {
      swiper.slideTo(index)
      setInternalActiveItem(index)
    }
  }

  useEffect(() => {
    if (!swiper) return

    const handleSlideChange = (): void => {
      setInternalActiveItem(swiper.realIndex)
    }

    swiper.on('slideChange', handleSlideChange)

    return (): void => {
      swiper.off('slideChange', handleSlideChange)
    }
  }, [swiper])

  return (
    <Row height={32} justifyContent='center' alignItems='center'>
      {[...new Array(totalItems)].map((_, index) => (
        <React.Fragment key={`${index + 1}-key`}>
          <TransitionContainer
            isHighlighted={calculatedActiveItem === index}
            onClick={() => {
              handleClick(index)
            }}
          />
          <Layout flexBasis={12} flexShrink={0} />
        </React.Fragment>
      ))}
    </Row>
  )
})

export { Pagination }
