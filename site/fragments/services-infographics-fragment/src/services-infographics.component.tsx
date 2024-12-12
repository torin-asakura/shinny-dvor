/* eslint-disable */

import type { ServicesInfographicsProps } from './services-infographic.interface.js'
import type { FC }                        from 'react'
// TODO ?
import type { LegacyRef }                 from 'react'

import React                              from 'react'
import { forwardRef }                     from 'react'

import { Box }                            from '@ui/layout'
import { Wheel }                          from '@ui/wheel'
import { extractFragment }                from '@globals/data'

export const ServicesInfographics: FC<ServicesInfographicsProps> = forwardRef((
  { fragmentsData, uiData },
  ref: LegacyRef<HTMLDivElement>
) => {
  const titles = new Map<string, string>()
  const wheelImg = new Map<string, string>()

  const extractFragmentTitle = (position: string): string =>
    extractFragment('contentAddons', position, fragmentsData).title

  const titleTop = extractFragmentTitle('info-title-top')
  const titleMiddle = extractFragmentTitle('info-title-middle')
  const titleBottom = extractFragmentTitle('info-title-bottom')

  titles.set('titleTop', titleTop)
  titles.set('titleMiddle', titleMiddle)
  titles.set('titleBottom', titleBottom)

  const extractFragmentImageData = (dataType: string): string =>
    extractFragment('contentAddons', 'wheel', uiData).image[dataType]

  const whellImgAltText = extractFragmentImageData('altText')
  const whellImgSourceUrl = extractFragmentImageData('sourceUrl')

  wheelImg.set('altText', whellImgAltText)
  wheelImg.set('sourceUrl', whellImgSourceUrl)

  return (
    <Box
      ref={ref}
      width='100%'
      minHeight={{ mobile: 640, tablet: 640, desktop: 800 }}
      justifyContent='center'
      alignItems='center'
    >
      <Box
        width={{ mobile: 335, tablet: 335, desktop: 440 }}
        height={{ mobile: 335, tablet: 335, desktop: 440 }}
        position='relative'
      >
        <Wheel titles={titles} wheelImg={wheelImg} />
      </Box>
    </Box>
  )
})
