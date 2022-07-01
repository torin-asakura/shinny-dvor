import React              from 'react'
import { FC }             from 'react'

import { Button }         from '@ui/button'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'
import { radiusVar }      from '@store/chosen-radius'
import { chosenVar }      from '@store/chosen-radius'

import { availableRadii } from '../../../data'

const AvailableRadii: FC = () => {
  const setChosenRadius = ({ item }) => {
    radiusVar(item)
    chosenVar(true)
  }
  return (
    <Box width='100%' height={['186px', '162px', '162px']} borderRadius='little' boxShadow='deep'>
      <Row>
        <Layout flexBasis={[20, 32, 32]} />
        <Column width='100%'>
          <Layout flexBasis={[20, 32, 32]} />
          <Layout>
            <Text fontWeight='medium' fontSize={['big', 'large', 'large']} lignHeight='grown'>
              Text
            </Text>
          </Layout>
          <Layout flexBasis={[16, 24, 24]} />
          <Row height={[108, 48, 48]} flexWrap='wrap'>
            {availableRadii.map((item) => (
              <>
                <Box width={48} height={48}>
                  <Button size='normal' color='radius' onClick={() => setChosenRadius({ item })}>
                    <Layout>
                      <Text fontSize='small'>{item}</Text>
                    </Layout>
                  </Button>
                </Box>
                <Layout flexBasis={[12, 16, 16]} />
              </>
            ))}
          </Row>
          <Layout flexBasis={[20, 32, 32]} />
        </Column>
        <Layout flexBasis={[20, 32, 32]} />
      </Row>
    </Box>
  )
}

export { AvailableRadii }
