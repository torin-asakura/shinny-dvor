import React                   from 'react'
import { FC }                  from 'react'

import { Button }              from '@ui/button'
import { Card }                from '@ui/card'
import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Text }                from '@ui/text'
import { setChosenRadius }     from '@store/actions'

import { ChosenRadius }        from '../chosen-radius'
import { SizeButtonCardProps } from './size-button-card.interface'

const SizeButtonCard: FC<SizeButtonCardProps> = ({ title, radii }) => (
  <Card
    backdrop
    container={
      <>
        <Text fontWeight='medium'>{title}</Text>
        <Layout flexBasis={20} />
        <Row flexWrap='wrap'>
          {radii.map(({ contentAddons: { title: radius } }) => (
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

export { SizeButtonCard }
