import styled                        from '@emotion/styled'

import React                         from 'react'
import { FC }                        from 'react'

import { Box }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Row }                       from '@ui/layout'

import { PaginationProps }           from './pagination.interface'
import { transitionContainerStyles } from './styles'

const TransitionBox = styled(Box)(transitionContainerStyles)

const Pagination: FC<PaginationProps> = ({ activeItem, totalItems, swiper }) => (
  <Row height={32} justifyContent='center' alignItems='center'>
    {[...new Array(totalItems)].map((_, index) => (
      <>
        <TransitionBox
          minWidth={activeItem === index ? 22 : 10}
          height={10}
          backgroundColor={activeItem === index ? 'primaryBlue' : 'lightGray'}
          borderRadius={50}
          onClick={() => {
            swiper?.slideTo(index)
          }}
          cursor='pointer'
        />
        <Layout flexBasis={12} flexShrink={0} />
      </>
    ))}
  </Row>
)

export { Pagination }
