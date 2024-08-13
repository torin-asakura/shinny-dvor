import React      from 'react'

import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Box }    from '@ui/layout'
import { Map }    from '@ui/map'

export const MapComponent = () => {
  return (
    <Row justifyContent='flex-end' flexWrap='wrap'>
      <Column width='100%' maxWidth={952} height='auto'>
        <Box display={['none', 'none', 'flex']} height={480}>
          <Map width='100%' height={480} />
        </Box>
      </Column>
    </Row>
  )
}
