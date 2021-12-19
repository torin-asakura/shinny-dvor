import React          from 'react'
import { FC }         from 'react'

import { Card }       from '@ui/card'
import { Box }        from '@ui/layout'
import { Row }        from '@ui/layout'
import { Text }       from '@ui/text'
import { Button }     from '@ui/button'
import { Layout }     from '@ui/layout'
import { radiusVar }  from '@store/chosen-radius'
import { chosenVar }  from '@store/chosen-radius'

import { SizeButton } from './size-button.component'

const SizeButtonCard: FC = () => {
  // TODO availableRadii should come from server
  const availableRadii = ['R12', 'R13', 'R14', 'R15', 'R16', 'R17', 'R18', 'R19', 'R20', 'R21']
  const setChosenRadius = ({ item }) => {
    radiusVar(item)
    chosenVar(true)
  }
  return (
    <Card
      backdrop
      container={
        <Row height={[108, 48, 48]} flexWrap='wrap'>
          {availableRadii.map((item) => (
            <>
              <Box width={48} height={48}>
                <Button color='radius' onClick={() => setChosenRadius({ item })}>
                  <Layout>
                    <Text fontSize='small'>{item}</Text>
                  </Layout>
                </Button>
              </Box>
              <Layout flexBasis={[12, 16, 16]} />
            </>
          ))}
        </Row>
      }
    >
      <SizeButton />
    </Card>
  )
}

export { SizeButtonCard }
