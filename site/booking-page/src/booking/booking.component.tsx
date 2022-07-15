import { useReactiveVar }   from '@apollo/client'

import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { SUCCESS }          from '@store/booking'
import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { Input }            from '@ui/input'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Select }           from '@ui/select'
import { Text }             from '@ui/text'
import { screenVar }        from '@store/booking'
import { activeCarBodyVar } from '@store/booking'
import { activeRadiusVar }  from '@store/booking'

import { RadioList }        from './radio-list'
import { availableRadii }   from '../../../data'

const Booking: FC = () => {
  // TODO write correct conditions for updateStatus
  const updateStatus = () => screenVar(SUCCESS)

  const activeRadius = useReactiveVar<boolean>(activeRadiusVar)
  const activeCarBody = useReactiveVar<boolean>(activeCarBodyVar)

  const carBodyList = ['auto1', 'auto2', 'auto3', 'auto4']
  const servicesList = ['Item1', 'Item2', 'Item3']

  const [comment, setComment] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<string[]>([])

  return (
    <Column width='100%'>
      <Layout flexBasis={[40, 40, 44]} />
      <Layout>
        <Text fontSize='giant' fontWeight='medium'>
          Text
        </Text>
      </Layout>
      <Layout flexBasis={32} />
      <Layout>
        <Text lineHeight='grown' color='darkGray'>
          Text
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <RadioList items={availableRadii} width={['18%', '8%', '8%']} id='radius' />
      <Layout flexBasis={20} />
      <Layout>
        <Text lineHeight='grown' color='darkGray'>
          Text
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <RadioList items={carBodyList} width={161} id='carBody' />
      <Layout flexBasis={20} />
      <Layout>
        <Text lineHeight='grown' color='darkGray'>
          Text
        </Text>
      </Layout>
      <Layout flexBasis={12} />
      <Select
        items={servicesList}
        value={selectedItem}
        placeholder='Placeholder'
        onSelect={setSelectedItem}
      />
      <Layout flexBasis={12} />
      <Divider backgroundColor={selectedItem.length ? 'primaryBlue' : 'gray'} />
      <Layout flexBasis={32} />
      <Layout>
        <Text lineHeight='grown' color='darkGray'>
          Text
        </Text>
      </Layout>
      <Layout flexBasis={12} />
      <Layout>
        <Input value={comment} onChange={setComment} placeholder='input' />
      </Layout>
      <Layout flexBasis={32} />
      <Box width='100%'>
        <Button
          disabled={!activeRadius || !activeCarBody || !selectedItem.length}
          onClick={updateStatus}
        >
          Button
        </Button>
      </Box>
      <Layout flexBasis={[48, 48, 128]} />
    </Column>
  )
}

export { Booking }
