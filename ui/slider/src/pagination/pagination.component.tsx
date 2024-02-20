import styled                        from '@emotion/styled'

import React                         from 'react'
import { FC }                        from 'react'
import { useMemo }                   from 'react'

import { Box }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Row }                       from '@ui/layout'

import { PaginationProps }           from './pagination.interface'
import { transitionContainerStyles } from './styles'

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

  return (
    <Row height={32} justifyContent='center' alignItems='center'>
      {[...new Array(totalItems)].map((_, index) => (
        <React.Fragment key={`${index + 1}-key`}>
          <TransitionBox
            minWidth={calculatedActiveItem === index ? 22 : 10}
            height={10}
            backgroundColor={calculatedActiveItem === index ? 'primaryBlue' : 'lightGray'}
            borderRadius={50}
            onClick={() => {
              swiper?.slideTo(index)
            }}
            cursor='pointer'
          />
          <Layout flexBasis={12} flexShrink={0} />
        </React.Fragment>
      ))}
    </Row>
  )
}
export { Pagination }
