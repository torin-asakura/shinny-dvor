import React               from 'react'
import { FC }              from 'react'

import { Button }          from '@ui/button'
import { Card }            from '@ui/card'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Text }            from '@ui/text'
import { radiusVar }       from '@store/chosen-radius'
import { chosenVar }       from '@store/chosen-radius'

import { SizeButton }      from './size-button.component'
import { SizeButtonProps } from './size-button.interface'

const SizeButtonCard: FC<SizeButtonProps> = ({ active }) => {
  // TODO availableRadii should come from server
  const availableRadii = [
    'R12',
    'R13',
    'R14',
    'R15',
    'R16',
    'R17',
    'R18',
    'R19',
    'R20',
    'R21',
    'R22',
  ]
  const setChosenRadius = ({ item }) => {
    radiusVar(item)
    chosenVar(true)
  }
  return (
    <Card
      backdrop
      container={
        <>
          <Text fontWeight='medium'>Text</Text>
          <Layout flexBasis={20} />
          <Row flexWrap='wrap'>
            {availableRadii.map((item) => (
              <>
                <Box width={56} height={65}>
                  <Button size='large' color='radius' onClick={() => setChosenRadius({ item })}>
                    <Text fontSize='small' fontWeight='medium'>
                      {item}
                    </Text>
                  </Button>
                </Box>
                <Layout flexBasis={10} />
              </>
            ))}
          </Row>
        </>
      }
    >
      <SizeButton active={active} />
    </Card>
  )
}

export { SizeButtonCard }
