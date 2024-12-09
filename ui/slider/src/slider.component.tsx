/* eslint-disable */

import type { SliderProps }       from './slider.interface.js'
import type { PropsWithChildren } from 'react'
import type { FC }                from 'react'

import { Swiper }                 from '@atls-ui-parts/swiper'

import React                      from 'react'
// @ts-ignore
import { Keyboard }               from 'swiper/modules'
// @ts-ignore
import { Navigation }             from 'swiper/modules'

export const Slider = () => {
  return <h1>Slider</h1>
}

// export const Slider: FC<PropsWithChildren<SliderProps>> = ({ children }) => (
//   <Swiper
//     loop
//     centeredSlides
//     loopAddBlankSlides={false}
//     allowTouchMove={false}
//     modules={[Keyboard, Navigation]}
//     keyboard={{
//       enabled: true,
//     }}
//     autoplay={{
//       stopOnLastSlide: false,
//     }}
//     breakpoints={{
//       640: {
//         slidesPerView: 1,
//         spaceBetween: 0,
//         initialSlide: 2,
//       },
//       768: {
//         slidesPerView: 1,
//         spaceBetween: 0,
//         initialSlide: 2,
//       },
//       1024: {
//         slidesPerView: 1.5,
//         spaceBetween: 40,
//         initialSlide: 0,
//       },
//     }}
//   >
//     {children}
//   </Swiper>
// )
