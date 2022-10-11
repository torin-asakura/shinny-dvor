import React           from 'react'
import { FC }          from 'react'

import { Layout }      from '@ui/layout'
import { useCarousel } from '@ui/carousel'

const Desktop: FC = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 3,
    spaceBetween: 32,
    centered: false,
    height: 397,
    width: 1279,
    loop: false,
  })

  return carousel
}

const Tablet: FC = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 2,
    spaceBetween: 0,
    centered: true,
    height: 333,
    width: 700,
    loop: true,
  })

  return carousel
}

const Mobile: FC = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 2,
    spaceBetween: 290,
    centered: false,
    height: 333,
    width: 355,
    loop: true,
  })

  return carousel
}

const Carousel: FC = ({ children }) => (
  <>
    <Layout display={['none', 'none', 'flex']}>
      <Desktop>{children}</Desktop>
    </Layout>
    <Layout display={['none', 'flex', 'none']}>
      <Tablet>{children}</Tablet>
    </Layout>
    <Layout display={['flex', 'none', 'none']}>
      <Mobile>{children}</Mobile>
    </Layout>
  </>
)

export { Carousel }
