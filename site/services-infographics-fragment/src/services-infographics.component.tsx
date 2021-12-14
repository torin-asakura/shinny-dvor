import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { InfoPoint }  from '@ui/info-point'
import { ImageBlock } from '@ui/image'

const ServicesInfographics: FC = () => (
  <Box
    width='100%'
    height={[640, 800, 800]}
    justifyContent='center'
    alignItems='center'
    border='1px solid yellow'
  >
    <Box width={[335, 440, 440]} height={[335, 440, 440]} position='relative'>
      <ImageBlock />
      <InfoPoint top={[23, 22, 22]} left={[232, 277, 277]} />
      <InfoPoint top={[108, 151, 151]} left={[43, 54, 65]} />
      <InfoPoint top={[193, 259, 259]} left={[100, 129, 129]} />
    </Box>
  </Box>
)

export { ServicesInfographics }
