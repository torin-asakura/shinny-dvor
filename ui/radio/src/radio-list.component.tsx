import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import { Condition }      from '@ui/condition'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'

import { Radio }          from './radio.component'
import { RadioListProps } from './radio.interface'

const RadioList: FC<RadioListProps> = ({ items, initial = '', onChoose = (item) => {} }) => {
  const [active, setActive] = useState<string>(initial)

  return (
    <Row justifyContent='space-between'>
      {items.map((item, index) => (
        <>
          <Radio
            checked={active === item}
            value={item}
            onClick={(event) => {
              event.preventDefault()
              onChoose(item)
              setActive(item)
            }}
          />
          <Condition match={index !== items.length - 1}>
            <Layout flexBasis={12} flexShrink={0} />
          </Condition>
        </>
      ))}
    </Row>
  )
}

export { RadioList }
