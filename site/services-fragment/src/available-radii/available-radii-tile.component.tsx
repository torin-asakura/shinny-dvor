import React                        from 'react'
import { FC }                       from 'react'

import { radiusVar }                from '@store/chosen-radius'
import { checkedRadiusServicesVar } from '@store/chosen-radius'
import { chosenVar }                from '@store/chosen-radius'

import { Box }                      from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Row }                      from '@ui/layout'
import { Text }                     from '@ui/text'
import { Button }                   from '@ui/button'

import { availableRadii }           from '../../../data'


const AvailableRadiiTile: FC = () => {
  const setChosenRadius = ({ item }) => {
    radiusVar(item)
    chosenVar(true)
  }

  return (
    <Box
      width={328}
      height={136}
      borderRadius='default'
      boxShadow='deep'
      display={['none', 'none', 'flex']}
    >
      <Row>
        <Layout flexBasis={8} />
        <Column>
          <Layout flexBasis={8} />
          <Row flexWrap='wrap' justifyContent='center' height='100%'>
            {availableRadii.map((item) => (
              <>
                <Layout flexBasis={4} />
                <Box width={56} height={56}>
                  <Button
                    height={56}
                    color='radius'
                    onClick={() => {
                      setChosenRadius({ item })
                      checkedRadiusServicesVar(false)
                  }}
                  >
                    <Layout>
                      <Text fontSize='small' fontWeight='bold'>{item}</Text>
                    </Layout>
                  </Button>
                </Box>
                <Layout flexBasis={4} />
              </>
            ))}
          </Row>
          <Layout flexBasis={8} />
        </Column>
      </Row>
    </Box>
  )
}

export { AvailableRadiiTile }
