import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import { Box }            from '@ui/layout'

import { OuterPoint }     from './outer-point'
import { InnerPoint }     from './inner-point'
import { InfoPointProps } from './info-point.interface'

const InfoPoint: FC<InfoPointProps> = ({ ...props }) => {
  const [onHover, setOnHover] = useState(false)
  return (
    <Box
      position='absolute'
      justifyContent='center'
      alignItems='center'
      onMouseOver={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      {...props}
    >
      <OuterPoint onHover={onHover}>
        <InnerPoint onHover={onHover} />
      </OuterPoint>
    </Box>
  )
}

export { InfoPoint }
