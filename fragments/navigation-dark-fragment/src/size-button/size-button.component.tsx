import { useReactiveVar }   from '@apollo/client'

import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { WheelIcon }        from '@ui/icons'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { chosenVar }        from '@store/chosen-radius'
import { radiusVar }        from '@store/chosen-radius'
import { checkedRadiusVar } from '@store/chosen-radius'

const SizeButton: FC = () => {
  const isRadiusSelected = useReactiveVar<boolean>(chosenVar)
  const radius = useReactiveVar<string>(radiusVar)
  const checkedRadius = useReactiveVar<boolean>(checkedRadiusVar)
  const [, setIsActive] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <Box
      width={[40, 48, 48]}
      height={[40, 48, 48]}
      onClick={() => checkedRadiusVar(!checkedRadius)}
    >
      <Layout width='100%' display={['flex', 'none', 'none']}>
        <Button
          color={isRadiusSelected || isChecked ? 'secondary' : 'darkWheel'}
          size='small'
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
          onClick={() => setIsChecked(!isChecked)}
        >
          <Layout>
            <Condition match={!isRadiusSelected}>
              <WheelIcon width={20} height={20} color={checkedRadius ? 'black' : 'white'} />
            </Condition>
            <Condition match={isRadiusSelected}>
              <Text fontWeight='medium' fontSize='small'>
                {radius}
              </Text>
            </Condition>
          </Layout>
        </Button>
      </Layout>
      <Layout width='100%' display={['none', 'flex', 'flex']}>
        <Button
          color={checkedRadius ? 'secondary' : 'darkWheel'}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
          onClick={() => setIsChecked(!isChecked)}
        >
          <Layout>
            <Condition match={!isRadiusSelected}>
              <WheelIcon width={24} height={24} color={isChecked ? 'black' : 'white'} />
            </Condition>
            <Condition match={isRadiusSelected}>
              <Text fontWeight='medium' fontSize='small'>
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
