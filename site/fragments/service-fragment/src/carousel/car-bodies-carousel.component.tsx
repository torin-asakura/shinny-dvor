import { FC }          from 'react'
import React           from 'react'

import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { useCarousel } from '@ui/carousel'

const Tablet: FC = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 3,
    spaceBetween: 20,
    centered: false,
    height: 40,
    width: 725,
    loop: false,
  })

  return carousel
}

const Mobile: FC = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 3,
    spaceBetween: 16,
    centered: false,
    height: 40,
    width: 335,
    loop: false,
  })

  return carousel
}

const CarBodiesCarousel: FC = ({ children }) => (
  <>
    <Layout display={['none', 'flex', 'none']}>
      <Tablet>{children}</Tablet>
    </Layout>
    <Box display={['flex', 'none', 'none']} overflow='hidden'>
      <Mobile>{children}</Mobile>
    </Box>
  </>
)

export { CarBodiesCarousel }
