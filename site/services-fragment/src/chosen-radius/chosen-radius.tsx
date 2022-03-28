import { useReactiveVar }           from '@apollo/client'

import React                        from 'react'
import { FC }                       from 'react'
import { useState }                 from 'react'

import { Button }                   from '@ui/button'
import { Box }                      from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Text }                     from '@ui/text'
import { radiusVar }                from '@store/chosen-radius'
import { checkedRadiusServicesVar } from '@store/chosen-radius'

const ChosenRadius: FC = () => {
  const radius = useReactiveVar<string>(radiusVar)
  const checkedRadiusServices = useReactiveVar<boolean>(checkedRadiusServicesVar)

  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <Box onClick={() => checkedRadiusServicesVar(!checkedRadiusServices)}>
      <Layout width='60px'>
        <Button
          color={checkedRadiusServices ? 'primary' : 'radius'}
          size='large'
          onClick={() => setIsChecked(!isChecked)}
        >
          <Layout>
            <Text fontWeight='bold' fontSize='small'>
              {radius}
            </Text>
          </Layout>
        </Button>
      </Layout>
    </Box>
  )
}

export { ChosenRadius }
