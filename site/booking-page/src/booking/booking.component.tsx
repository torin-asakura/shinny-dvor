import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import {activeCarBodyVar, activeRadiusVar, screenVar} from '@store/booking'
import { SUCCESS }        from '@store/booking'

import { Condition }      from '@ui/condition'
import { Button }         from '@ui/button'
import { Divider }        from '@ui/divider'
import { Column }         from '@ui/layout'
import { Input }          from '@ui/input'
import { Layout }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { Text }           from '@ui/text'
import { Select }         from '@ui/select'

import { availableRadii } from '../../../data'
import { RadioList }      from './radio-list'
import {useReactiveVar} from '@apollo/client'

const Booking: FC = () => {
  // TODO write correct conditions for updateStatus
  const updateStatus = () => screenVar(SUCCESS)

  const activeRadius = useReactiveVar<boolean>(activeRadiusVar)
  const activeCarBody = useReactiveVar<boolean>(activeCarBodyVar)

  const carBodyList = ['auto1', 'auto2', 'auto3', 'auto4']
  const servicesList = ['Item1', 'Item2', 'Item3']

  const [, setValue] = useState<string>('Placeholder')
  const [isSelected, setIsSelected] = useState<string>('')

  return (
    <Column width='100%'>
      <Layout flexBasis={[40, 44, 44]} />
      <Layout>
        <Text fontSize='giant' fontWeight='medium'>
          Text
        </Text>
      </Layout>
      <Layout flexBasis={32} />
      <Layout>
        <Text color='darkGray'>Text</Text>
      </Layout>
      <Layout flexBasis={16} />
        <RadioList items={availableRadii} width={['18%', '8%', '8%']} id={'radius'} />
      <Layout flexBasis={20} />
      <Layout>
        <Text color='darkGray'>Text</Text>
      </Layout>
      <Layout flexBasis={16} />
        <RadioList items={carBodyList} width={161} id={'carBody'} />
      <Layout flexBasis={20} />
      <Layout>
        <Text color='darkGray'>Text</Text>
      </Layout>
      <Layout flexBasis={12} />
        <Select
          setIsSelected={setIsSelected}
          items={servicesList}
          placeholder='Placeholder'
          onChange={(item) => {
            setValue(item)
          }}
        />
      <Layout flexBasis={12} />
        <Divider color={isSelected ? 'primaryBlue' : 'gray'} />
      <Layout flexBasis={32} />
      <Layout>
        <Text color='darkGray'>Text</Text>
      </Layout>
      <Layout flexBasis={12} />
      <Layout>
        <Input placeholder='input' />
      </Layout>
      <Layout flexBasis={32} />
      <Condition match={!activeRadius || !activeCarBody || !isSelected}>
        <Box width='100%'>
          <Button disabled>Button</Button>
        </Box>
      </Condition>
      <Condition match={activeRadius && activeCarBody && isSelected}>
        <Box width='100%'>
          <Button onClick={updateStatus}>Button</Button>
        </Box>
      </Condition>
      <Layout flexBasis={[48, 128, 128]} />
    </Column>
  )
}

export { Booking }
