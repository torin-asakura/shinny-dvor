import type { PaginationProps } from './pagination.interface.js'

import { FC }                   from 'react'
import { memo }                 from 'react'
import { useMemo }              from 'react'
import React                    from 'react'

import { Layout }               from '@ui/layout'
import { Row }                  from '@ui/layout'

import { TransitionContainer }  from '../transition-container/index.js'

const Pagination: FC<PaginationProps> = memo(({ activeItem, totalItems, swiper }) => {
  const calculatedActiveItem = useMemo(() => {
    const maxIndex = totalItems - 1
    if (!activeItem) return 0
    if (activeItem > maxIndex) {
      return activeItem - maxIndex * Math.floor(activeItem / maxIndex) - 1
    }
    return activeItem
  }, [activeItem, totalItems])

  const handleClick = (index: number): void => {
    swiper?.slideTo(index)
  }

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
