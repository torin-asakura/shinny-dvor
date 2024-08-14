import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import React                      from 'react'

import { Layout }                 from '@ui/layout'
import { useCarousel }            from '@ui/carousel'

const Tablet: FC<PropsWithChildren> = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 2,
    spaceBetween: 20,
    centered: false,
    height: 333,
    width: 725,
    loop: false,
  })

  return carousel
}

const Mobile: FC<PropsWithChildren> = ({ children }) => {
  const { carousel } = useCarousel({
    children,
    slidesPerView: 2,
    spaceBetween: 260,
    centered: true,
    height: 282,
    width: 340,
    loop: false,
  })

  return carousel
}

export const WorkExamplesCarousel: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Layout display={['none', 'flex', 'none']}>
      <Tablet>{children}</Tablet>
    </Layout>
    <Layout display={['flex', 'none', 'none']}>
      <Mobile>{children}</Mobile>
    </Layout>
  </>
)
