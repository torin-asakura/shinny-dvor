import type { PaginationProps }      from './pagination.interface.js'
import type { FC }                   from 'react'

import styled                        from '@emotion/styled'

import React                         from 'react'
import { useMemo }                   from 'react'

import { Box }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Row }                       from '@ui/layout'

import { transitionContainerStyles } from './styles/index.js'

const TransitionBox = styled(Box)(transitionContainerStyles)

const Pagination: FC<PaginationProps> = ({ activeItem, totalItems, swiper }) => {
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
          <TransitionBox
            minWidth={calculatedActiveItem === index ? 22 : 10}
            height={10}
            backgroundColor={calculatedActiveItem === index ? 'primaryBlue' : 'lightGray'}
            borderRadius={50}
            cursor='pointer'
            onClick={() => handleClick(index)}
          />
          <Layout flexBasis={12} flexShrink={0} />
        </React.Fragment>
      ))}
    </Row>
  )
}
export { Pagination }
