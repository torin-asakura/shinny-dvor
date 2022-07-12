import React               from 'react'
import { forwardRef }      from 'react'

import { Box }             from '@ui/layout'
import { Wheel }           from '@ui/wheel'
import { extractor }       from '@shared/utils'

import { useInfographics } from './data'

const ServicesInfographics = forwardRef((props, ref: any) => {
  const { infographics } = useInfographics()

  const titles = new Map<string, string>()

  if (infographics) {
    titles.set('titleTop', extractor(infographics, 'id', 'cG9zdDoyMDA2'))
    titles.set('titleMiddle', extractor(infographics, 'id', 'cG9zdDoyMDA4'))
    titles.set('titleBottom', extractor(infographics, 'id', 'cG9zdDoyMDA5'))
  }

  return (
    <Box
      width='100%'
      minHeight={[640, 640, 800]}
      justifyContent='center'
      alignItems='center'
      ref={ref}
    >
      <Box width={[335, 335, 440]} height={[335, 335, 440]} position='relative'>
        <Wheel titles={titles} />
      </Box>
    </Box>
  )
})

export { ServicesInfographics }
