import React              from 'react'
import { FC }             from 'react'

import { screenVar }      from '@store/booking'
import { SUCCESS }        from '@store/booking'
import { Button }         from '@ui/button'
import { Divider }        from '@ui/divider'
import { Column }         from '@ui/layout'
import { RadioList }      from '@ui/radio'
import { Input }          from '@ui/input'
import { Layout }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { Text }           from '@ui/text'

import { availableRadii } from '../../../data'

const Booking: FC = () => {
  // TODO write correct conditions for updateStatus
  const updateStatus = () => screenVar(SUCCESS)
  const carBodyList = ['auto1', 'auto2', 'auto3', 'auto4']
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
      <RadioList items={availableRadii} width={['18%', '8%', '8%']} />
      <Layout flexBasis={20} />
      <Layout>
        <Text color='darkGray'>Text</Text>
      </Layout>
      <Layout flexBasis={16} />
      <RadioList items={carBodyList} width={171} />
      <Layout flexBasis={20} />
      <Layout>
        <Text color='darkGray'>Text</Text>
      </Layout>
      <Layout flexBasis={12} />
      <Box width='100%' height='45px' border='1px solid blue' />
      <Layout flexBasis={12} />
      <Divider />
      <Layout flexBasis={32} />
      <Layout>
        <Text color='darkGray'>Text</Text>
      </Layout>
      <Layout flexBasis={12} />
      <Layout>
        <Input placeholder='input' />
      </Layout>
      <Layout flexBasis={32} />
      <Box width='100%'>
        <Button onClick={() => updateStatus()}>Button</Button>
      </Box>
      <Layout flexBasis={[48, 128, 128]} />
    </Column>
  )
}

export { Booking }
