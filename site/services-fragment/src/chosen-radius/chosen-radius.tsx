import React              from 'react'
import { FC }             from 'react'
import { useReactiveVar } from '@apollo/client'

import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'
import { radiusVar }      from '@store/chosen-radius'

const ChosenRadius: FC = () => {
  const radius = useReactiveVar(radiusVar)
  return (
    <Box
      width={56}
      height={56}
      backgroundColor='lightGray'
      borderRadius='normal'
      justifyContent='center'
      alignItems='center'
      flexShrink={0}
    >
      <Layout>
        <Text fontWeight='bold'>{radius}</Text>
      </Layout>
    </Box>
  )
}

export { ChosenRadius }
