import React              from 'react'
import { FC }             from 'react'

import { Button }         from '@ui/button'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

import { availableRadii } from '../../../data'

const AvailableRadii: FC = () => (
  <Box width='100%' height={['186px', '162px', '162px']} borderRadius='little' boxShadow='deep'>
    <Row>
      <Layout flexBasis={[20, 32, 32]} />
      <Column width='100%'>
        <Layout flexBasis={[20, 32, 32]} />
        <Layout>
          <Text fontWeight='medium' fontSise='large'>
            Text
          </Text>
        </Layout>
        <Layout flexBasis={[16, 24, 24]} />
        <Box width='100%' height={[108, 48, 48]} justifyContent='space-between'>
          {availableRadii.map((item) => (
            <Button size='ghost' color='transparent'>
              <Box
                width={48}
                height={48}
                borderRadius='normal'
                backgroundColor='lightGray'
                justifyContent='center'
                alignItems='center'
              >
                <Layout>
                  <Text fontWeight='bold' color='black'>
                    {item}
                  </Text>
                </Layout>
              </Box>
            </Button>
          ))}
        </Box>
        <Layout flexBasis={[20, 32, 32]} />
      </Column>
      <Layout flexBasis={[20, 32, 32]} />
    </Row>
  </Box>
)

export { AvailableRadii }
