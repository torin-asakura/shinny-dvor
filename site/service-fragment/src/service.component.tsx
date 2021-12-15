import React            from 'react'
import { FC }           from 'react'

import { Button }       from '@ui/button'
import { Condition }    from '@ui/condition'
import { Divider }      from '@ui/divider'
import { Box }          from '@ui/layout'
import { Row }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Text }         from '@ui/text'

import { ReturnButton } from './return-button'
import { CarBodyItem }  from './car-body-item'

const Service: FC = () => {
  // TODO write isTireFitting
  const isTireFitting = true
  const carBodyList = ['Cabriolet', 'Minivan', 'Cabriolet', 'Minivan']
  return (
    <Box width='100%' border='1px solid green'>
      <Row>
        <Layout flexBasis={[20, 299, 299]} />
        <Column width='100%'>
          <Layout flexBasis={[20, 32, 32]} />
          <Box width={102}>
            <ReturnButton />
          </Box>
          <Layout flexBasis={32} />
          <Layout>
            <Text
              fontWeight='medium'
              fontSize={['extraLarge', 'giant', 'giant']}
              lineHeight='grown'
            >
              Text
            </Text>
          </Layout>
          <Layout flexBasis={8} />
          <Condition match={isTireFitting}>
            <Layout flexBasis={24} />
            <Box
              width='100%'
              height={[40, 48, 48]}
              backgroundColor={['none', 'fillGray', 'fillGray']}
              justifyContent='space-between'
              alignItems='center'
            >
              {carBodyList.map((item) => (
                <Box maxWidth={163}>
                  <CarBodyItem item={item} />
                </Box>
              ))}
            </Box>
            <Layout flexBasis={24} />
          </Condition>
          <Layout>
            <Text fontColor='darkGray' fontSize='xl' fontWeight='medium'>
              Text
            </Text>
          </Layout>
          <Layout flexBasis={24} />
          <Divider color='gray' />
          <Layout flexBasis={24} />
          <Layout minHeight={130}>
            <Text>Text</Text>
          </Layout>
          {/* FIXME find out the condition */}
          <Condition match>
            <Layout flexBasis={24} />
            <Divider color='gray' />
            <Layout flexBasis={24} />
            <Box width='100%' height={26} border='1px solid gray'>
              <Text fontSize='large' fontWeight='medium'>
                Accordion
              </Text>
            </Box>
          </Condition>
          <Condition match={isTireFitting}>
            <Layout flexBasis={24} />
            <Box
              width='100%'
              height={[88, 104, 104]}
              backgroundColor='fillGray'
              borderRadius='mini'
            >
              Wheel balancing
            </Box>
            <Layout flexBasis={24} />
          </Condition>
          <Layout flexBasis={32} />
          <Box width='100%' height={48}>
            <Button>Button</Button>
          </Box>
          <Layout flexBasis={[65, 120, 120]} />
        </Column>
        <Layout flexBasis={[20, 299, 299]} />
      </Row>
    </Box>
  )
}

export { Service }
