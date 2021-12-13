import React         from 'react'
import { FC }        from 'react'

import { screenVar } from '@store/booking'
import { SUCCESS }   from '@store/booking'
import { Button }    from '@ui/button'
import { Divider }   from '@ui/divider'
import { Column }    from '@ui/layout'
import { RadioList } from '@ui/radio'
import { Layout }    from '@ui/layout'
import { Box }       from '@ui/layout'
import { Text }      from '@ui/text'

const Booking: FC = () => {
  // TODO write correct conditions for updateStatus
  const updateStatus = () => screenVar(SUCCESS)
  const availableRadii = ['R12', 'R13', 'R14', 'R15', 'R16', 'R17', 'R18', 'R19', 'R20', 'R21']
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
      <RadioList items={carBodyList} width={['48%', 171, 171]} />
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
        <Text>Text</Text>
      </Layout>
      <Layout flexBasis={12} />
      <Layout>
        <Text>Input</Text>
      </Layout>
      <Layout flexBasis={16} />
      <Divider />
      <Layout flexBasis={32} />
      <Button onClick={() => updateStatus()}>Button</Button>
      <Layout flexBasis={[48, 128, 128]} />
    </Column>
  )
}

export { Booking }
