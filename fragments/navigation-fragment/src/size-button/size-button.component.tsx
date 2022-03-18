import { useReactiveVar } from '@apollo/client'

import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import { Button }         from '@ui/button'
import { Condition }      from '@ui/condition'
import { WheelIcon }      from '@ui/icons'
import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'
import { chosenVar }      from '@store/chosen-radius'
import { radiusVar }      from '@store/chosen-radius'

const SizeButton: FC = () => {
  const isRadiusSelected = useReactiveVar(chosenVar)
  const radius = useReactiveVar(radiusVar)
  const [onHover, setOnHover] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const getColor = () => {
    let newColor = 'black'
    if (onHover) {
      newColor = 'blue'
    } else if (isActive) {
      newColor = 'darkBlue'
    } else newColor = 'black'
    return newColor
  }
  return (
    <Box width={[40, 48, 48]} height={[40, 48, 48]}>
      <Layout width='100%' display={['flex', 'none', 'none']}>
        <Button
          color='lightWheel'
          size='small'
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
          onMouseOver={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <Layout>
            <Condition match={!isRadiusSelected}>
              <WheelIcon width={24} height={24} color={getColor()} />
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
          color='lightWheel'
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
          onMouseOver={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <Layout>
            <Condition match={!isRadiusSelected}>
              <WheelIcon width={24} height={24} color={getColor()} />
            </Condition>
            <Condition match={isRadiusSelected}>
              <Text fontWeight='bold' fontSize='small'>
                {radius}
              </Text>
            </Condition>
          </Layout>
        </Button>
      </Layout>
    </Box>
  )
}

export { SizeButton }
