import React         from 'react'
import { FC }        from 'react'

import { Condition } from '@ui/condition'
import { Divider }   from '@ui/divider'
import { Box }       from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

const Service: FC = () => {
  // TODO write isTireFitting
  const isTireFitting = true
  return (
    <Box width='100%' border='1px solid green'>
      <Row>
        <Layout flexBasis={[20, 299, 299]} />
        <Column width='100%'>
          <Layout flexBasis={[20, 32, 32]} />
          <Box width={100} border='1px solid green'>
            Button
          </Box>
          <Layout flexBasis={32} />
          <Layout>
            <Text>Text</Text>
          </Layout>
          <Layout flexBasis={8} />
          <Condition match={isTireFitting}>
            <Layout flexBasis={24} />
            <Box width='100%' height={40} border='1px solid gray'>
              Car body list
            </Box>
            <Layout flexBasis={24} />
          </Condition>
          <Layout>
            <Text>Text</Text>
          </Layout>
          <Layout flexBasis={24} />
          <Divider />
          <Layout flexBasis={24} />
          <Layout minHeight={130}>
            <Text>Text</Text>
          </Layout>
          {/* FIXME find out the condition */}
          <Condition match={false}>
            <Layout flexBasis={24} />
            <Divider />
            <Layout flexBasis={24} />
            <Box width='100%' height={26} border='1px solid gray'>
              Accordion
            </Box>
          </Condition>
          <Condition match={isTireFitting}>
            <Layout flexBasis={24} />
            <Box width='100%' height={[88, 104, 104]} border='1px solid gray'>
              Wheel balancing
            </Box>
            <Layout flexBasis={24} />
          </Condition>
          <Layout flexBasis={32} />
          <Box width='100%' height={48} border='1px solid green'>
            Button
          </Box>
          <Layout flexBasis={[65, 120, 120]} />
        </Column>
        <Layout flexBasis={[20, 299, 299]} />
      </Row>
    </Box>
  )
}

export { Service }
