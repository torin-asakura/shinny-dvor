/* eslint-disable */

import type { FC }             from 'react'

import type { AccordionProps } from './accordion.interface.js'

import { useState }            from 'react'
import React                   from 'react'

import { Condition }           from '@ui/condition'
import { DropDownIcon }        from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'

import { ArrowContainer }      from './arrow-container/index.js'
import { TriggerContainer }    from './trigger-container/index.js'

const Accordion: FC<AccordionProps> = ({ children, text }) => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <Column width='100%'>
      <TriggerContainer
        onClick={() => {
          setActive(!active)
        }}
      >
        <Box
          width='100%'
          height={40}
          borderRadius='intermediate'
          justifyContent='space-between'
          alignItems='center'
        >
          <Layout>
            <Text fontWeight='medium' fontSize='large' color='primary'>
              {text}
            </Text>
          </Layout>
          <Layout flexBasis={6} />
          <ArrowContainer isOpen={active}>
            <DropDownIcon width={14} height={14} />
          </ArrowContainer>
        </Box>
      </TriggerContainer>
      <Condition match={active}>
        <Layout flexBasis={24} flexShrink={0} />
        <Row justifyContent='space-between'>{children}</Row>
      </Condition>
    </Column>
  )
}

export { Accordion }
