import React               from 'react'
import { forwardRef }      from 'react'

import { Box }             from '@ui/layout'
import { Wheel }           from '@ui/wheel'

import { useInfographics } from './data'

const ServicesInfographics = forwardRef((props, ref: any) => {
  const { infographics } = useInfographics()

  const titles = {
    titleTop: '',
    titleMiddle: '',
    titleBottom: '',
  }

  if (infographics) {
    titles.titleTop = infographics[2]?.title
    titles.titleMiddle = infographics[1]?.title
    titles.titleBottom = infographics[0]?.title
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
