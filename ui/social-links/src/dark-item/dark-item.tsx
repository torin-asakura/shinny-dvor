import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Button } from '@ui/button'
import { Layout } from '@ui/layout'

const DarkItem: FC = ({ children }) => (
  <Box width={48} height={48}>
    <Button color='darkSocial'>
      <Layout>{children}</Layout>
    </Button>
  </Box>
)

export { DarkItem }
