import React                 from 'react'
import { FC }                from 'react'
import { useState }          from 'react'

import { ALL_SERVICES }      from '@store/services'
import { Button }            from '@ui/button'
import { Condition }         from '@ui/condition'
import { Divider }           from '@ui/divider'
import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Switch }            from '@ui/switch'
import { Item }              from '@ui/switch'
import { Text }              from '@ui/text'
import { screenVar }         from '@store/services'

import { AdditionalService } from './additional-service'
import { ReturnButton }      from './return-button'

const Service: FC = () => {
  // TODO write isTireFitting
  const isTireFitting = false
  const carBodyList = ['Легковой', 'Джип', 'Минивэн', 'Микроавтобус', 'Грузовой']
  const [onCarBody, setOnCarbody] = useState(carBodyList[0])

  return (
    <Box width='100%'>
      <Row>
        <Layout flexBasis={[20, 20, 299]} />
        <Column width='100%'>
          <Layout flexBasis={[20, 20, 32]} />
          <Box width={102}>
            <ReturnButton />
          </Box>
          <Layout flexBasis={32} />
          <Layout>
            <Text
              fontWeight='medium'
              fontSize={['extraLarge', 'extraLarge', 'giant']}
              lineHeight='grown'
            >
              Text
            </Text>
          </Layout>
          <Layout flexBasis={8} />
          <Condition match={isTireFitting}>
            <Layout flexBasis={24} />
            <Switch active={onCarBody}>
              {carBodyList.map((item) => (
                <Item value={item} onSelect={setOnCarbody}>
                  {item}
                </Item>
              ))}
            </Switch>
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
            <Box width='100%' height={26}>
              <Text fontSize='large' fontWeight='medium'>
                Accordion
              </Text>
            </Box>
          </Condition>
          <Condition match={isTireFitting}>
            <Layout flexBasis={24} />
            <AdditionalService />
            <Layout flexBasis={24} />
          </Condition>
          <Layout flexBasis={32} />
          <Box width='100%' height={48}>
            <Button onClick={() => screenVar(ALL_SERVICES)}>Button</Button>
          </Box>
          <Layout flexBasis={[65, 65, 120]} />
        </Column>
        <Layout flexBasis={[20, 20, 299]} />
      </Row>
    </Box>
  )
}

export { Service }
