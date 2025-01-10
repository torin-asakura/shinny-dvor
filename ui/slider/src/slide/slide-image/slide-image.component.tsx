import React                                from 'react'
import { FC }                               from 'react'
import { default as BaseReactCompareImage } from 'react-compare-image'
import { useSearchParams }                  from 'next/navigation.js'
import { memo }                             from 'react'

import { Condition }                        from '@ui/condition'
import { Box }                              from '@ui/layout'

import { Handle }                           from '../../handle/index.js'
import { SlideImageProps }                  from './slide-image.interfaces.js'

const ReactCompareImage = BaseReactCompareImage as unknown as FC<any>

export const SlideImage = memo(({ swiperSlide, image }: SlideImageProps) => {
  const searchParams = useSearchParams()
  const yandexTurbo = searchParams.get('yandex-turbo')

  return (
    <Box fill>
      <Condition match={!Boolean(yandexTurbo)}>
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
  )
})
