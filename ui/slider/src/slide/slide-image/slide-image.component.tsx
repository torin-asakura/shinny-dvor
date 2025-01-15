/* eslint-disable react/jsx-no-leaked-render */

import type { FC }                          from 'react'

import type { ReactCompareImageProps }      from './slide-image.interfaces.js'
import type { SlideImageProps }             from './slide-image.interfaces.js'

import { default as BaseReactCompareImage } from 'react-compare-image'
import { memo }                             from 'react'
import React                                from 'react'

import { Condition }                        from '@ui/condition'
import { Box }                              from '@ui/layout'

import { Handle }                           from '../../handle/index.js'

const ReactCompareImage = BaseReactCompareImage as unknown as FC<ReactCompareImageProps>

export const SlideImage = memo(({ swiperSlide, image, isYandexTurbo }: SlideImageProps) => (
  <Box fill>
    <Condition match={!isYandexTurbo}>
      <Box
        fill
        alignItems='center'
        justifyContent='center'
        display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}
      >
        <ReactCompareImage
          handle={swiperSlide.isActive && <Handle />}
          sliderLineWidth={swiperSlide.isActive ? 2 : 0}
          leftImage={image.firstPhoto.sourceUrl}
          rightImage={image.secondPhoto.sourceUrl}
          sliderPositionPercentage={0.49}
          sliderLineColor='linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 27.6%, #FFFFFF 71.87%, rgba(255, 255, 255, 0.2) 100%)'
        />
      </Box>
    </Condition>
    <Box
      fill
      display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }}
      justifyContent='center'
      alignItems='center'
    >
      <ReactCompareImage
        handle={swiperSlide.isActive && <Handle />}
        leftImage={image.firstPhoto.sourceUrl}
        rightImage={image.secondPhoto.sourceUrl}
        sliderPositionPercentage={0.4}
        rightImageCss={{ objectFit: 'fill', objectPosition: 'center' }}
        leftImageCss={{ objectFit: 'fill', objectPosition: 'center' }}
        sliderLineColor='linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 27.6%, #FFFFFF 71.87%, rgba(255, 255, 255, 0.2) 100%)'
      />
    </Box>
  </Box>
))
