import type { FC } from 'react'

import { memo }    from 'react'
import React       from 'react'

import { Row }     from '@ui/layout'
import { Column }  from '@ui/layout'
import { Box }     from '@ui/layout'
import { Map }     from '@ui/map'

export const MapComponent: FC = memo(() => (
  <Row maxWidth={952} justifyContent='flex-end' flexWrap='wrap'>
    <Column width='100%' height='auto'>
      <Box display={['none', 'none', 'flex']} height={480}>
        <Map width='100%' height={480} />
      </Box>
    </Column>
  </Row>
))
