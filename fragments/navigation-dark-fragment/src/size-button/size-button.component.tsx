import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'
import { useReactiveVar } from '@apollo/client'

import { Box }            from '@ui/layout'
import { Condition }      from '@ui/condition'
import { Text }           from '@ui/text'
import { Button }         from '@ui/button'
import { Layout }         from '@ui/layout'
import { WheelIcon }      from '@ui/icons'
import { chosenVar }      from '@store/chosen-radius'
import { radiusVar }      from '@store/chosen-radius'

const SizeButton: FC = () => {
  const isRadiusSelected = useReactiveVar(chosenVar)
  const radius = useReactiveVar(radiusVar)
  const [isActive, setIsActive] = useState(false)
  return (
    <Box width={[40, 48, 48]} height={[40, 48, 48]}>
      <Layout width='100%' display={['flex', 'none', 'none']}>
        <Button
          color='darkWheel'
          size='small'
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
        >
          <Layout>
            <Condition match={!isRadiusSelected}>
              <WheelIcon width={20} height={20} color={isActive ? 'black' : 'white'} />
            </Condition>
            <Condition match={isRadiusSelected}>
              <Text fontWeight='bold' fontSize='small'>
                {radius}
              </Text>
            </Condition>
          </Layout>
        </Button>
      </Layout>
      <Layout width='100%' display={['none', 'flex', 'flex']}>
        <Button
          color='darkWheel'
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
        >
          <Layout>
            <Condition match={!isRadiusSelected}>
              <WheelIcon width={24} height={24} color={isActive ? 'black' : 'white'} />
            </Condition>
            <Condition match={isRadiusSelected}>
              <Text>{radius}</Text>
            </Condition>
          </Layout>
        </Button>
      </Layout>
    </Box>
  )
}

export { SizeButton }
