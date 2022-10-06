import React               from 'react'
import { FC }              from 'react'

import { Button }          from '@ui/button'
import { Card }            from '@ui/card'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Text }            from '@ui/text'
import { setChosenRadius } from '@store/actions'

import { ChosenRadius }    from '../chosen-radius'

const SizeButtonCard: FC = () => {
  const radii = [{ radius: 'R12' }, { radius: 'R13' }, { radius: 'R14' }]

  return (
    <Card
      backdrop
      container={
        <>
          <Text fontWeight='medium'>Text</Text>
          <Layout flexBasis={20} />
          <Row flexWrap='wrap'>
            {radii.map(({ radius }) => (
              <>
                <Box key={radius} width={56} height={65}>
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
      <ChosenRadius />
    </Card>
  )
}

export { SizeButtonCard }
