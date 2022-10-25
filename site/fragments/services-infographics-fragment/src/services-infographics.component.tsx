import React                         from 'react'
import { LegacyRef }                 from 'react'
import { FC }                        from 'react'
import { forwardRef }                from 'react'

import { Box }                       from '@ui/layout'
import { Wheel }                     from '@ui/wheel'
import { extractFragment }           from '@globals/data'

import { ServicesInfographicsProps } from './services-infographic.interface'

const ServicesInfographics: FC<ServicesInfographicsProps> = forwardRef((
  { fragmentsData, uiData },
  ref: LegacyRef<HTMLDivElement>
) => {
  const titles = new Map<string, string>()
  const wheelImg = new Map<string, string>()

  titles.set('titleTop', extractFragment('contentAddons', 'info-title-top', fragmentsData).title)
  titles.set(
    'titleMiddle',
    extractFragment('contentAddons', 'info-title-middle', fragmentsData).title
  )
  titles.set(
    'titleBottom',
    extractFragment('contentAddons', 'info-title-bottom', fragmentsData).title
  )
  wheelImg.set('altText', extractFragment('contentAddons', 'wheel', uiData).image.altText)
  wheelImg.set('sourceUrl', extractFragment('contentAddons', 'wheel', uiData).image.sourceUrl)

  return (
    <Box
      width='100%'
      minHeight={[640, 640, 800]}
      justifyContent='center'
      alignItems='center'
      ref={ref}
    >
      <Box width={[335, 335, 440]} height={[335, 335, 440]} position='relative'>
        <Wheel titles={titles} wheelImg={wheelImg} />
      </Box>
    </Box>
  )
})

export { ServicesInfographics }
