import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'

import { Box }             from '@ui/layout'
import { Condition }       from '@ui/condition'
import { Text }            from '@ui/text'
import { Button }          from '@ui/button'
import { Layout }          from '@ui/layout'
import { WheelIcon }       from '@ui/icons'

import { SizeButtonProps } from './size-button.interface'

const SizeButton: FC<SizeButtonProps> = ({ pageStyle }) => {
  // TODO write isRadiusSelected
  const isRadiusSelected = true
  const [isActive, setIsActive] = useState(false)
  return (
    <Box width={[40, 48, 48]} height={[40, 48, 48]}>
      <Condition match={pageStyle === 'light'}>
        <Layout width='100%' display={['flex', 'none', 'none']}>
          <Button color='lightWheel' size='small'>
            <Layout>
              <Condition match={!isRadiusSelected}>
                <WheelIcon width={24} height={24} />
              </Condition>
              <Condition match={isRadiusSelected}>
                <Text fontWeight='bold' fontSize='small'>
                  R13
                </Text>
              </Condition>
            </Layout>
          </Button>
        </Layout>
        <Layout width='100%' display={['none', 'flex', 'flex']}>
          <Button color='lightWheel'>
            <Layout>
              <Condition match={!isRadiusSelected}>
                <WheelIcon width={24} height={24} />
              </Condition>
              <Condition match={isRadiusSelected}>
                <Text>R13</Text>
              </Condition>
            </Layout>
          </Button>
        </Layout>
      </Condition>
      <Condition match={pageStyle === 'dark'}>
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
                  R13
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
                <Text>R13</Text>
              </Condition>
            </Layout>
          </Button>
        </Layout>
      </Condition>
    </Box>
  )
}

export { SizeButton }
