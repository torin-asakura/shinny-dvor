import React               from 'react'
import { FC }              from 'react'

import { Button }          from '@ui/button'
import { Card }            from '@ui/card'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Text }            from '@ui/text'
import { setChosenRadius } from '@store/actions'

import { SizeButton }      from './size-button.component'
import { SizeButtonProps } from './size-button.interface'
import { useMockedRadii }  from '../data'

const SizeButtonCard: FC<SizeButtonProps> = ({ active }) => {
  const { radii } = useMockedRadii()

  return (
    <Card
      backdrop
      container={
        <>
          <Text fontWeight='medium'>Text</Text>
          <Layout flexBasis={20} />
          <Row flexWrap='wrap'>
            {radii.map(({ id, radius }) => (
              <>
                <Box key={id} width={56} height={65}>
                  <Button size='large' color='radius' onClick={() => setChosenRadius(radius)}>
                    <Text fontSize='small' fontWeight='medium'>
                      {radius}
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
