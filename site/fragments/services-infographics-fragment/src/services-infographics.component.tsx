import React          from 'react'
import { forwardRef } from 'react'

import { Box }        from '@ui/layout'
import { Wheel }      from '@ui/wheel'
import { extractor }  from '@globals/data'
import { useData }    from '@globals/data'

const ServicesInfographics = forwardRef((props, ref: any) => {
  const { fragments } = useData()

  const titles = new Map<string, string>()

  if (fragments) {
    titles.set('titleTop', extractor(fragments?.infographic?.Infographic, 'title', 'title-top'))
    titles.set(
      'titleMiddle',
      extractor(fragments?.infographic?.Infographic, 'title', 'title-middle')
    )
    titles.set(
      'titleBottom',
      extractor(fragments?.infographic?.Infographic, 'title', 'title-bottom')
    )
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
