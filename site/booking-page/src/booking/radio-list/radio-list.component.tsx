import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Radio }          from '@ui/radio'

import { RadioListProps } from './radio-list.interface'

const RadioList: FC<RadioListProps> = ({ items, initial = '', width = '100%' }) => {
  const [active, setActive] = useState<string>(initial)

  return (
    <Row justifyContent='space-between' flexWrap='wrap'>
      {items.map((item) => (
        <Box
          width={width}
          onClick={() => {
            setActive(item)
          }}
        >
          <Radio checked={active === item}>{item}</Radio>
        </Box>
      ))}
    </Row>
  )
}

export { RadioList }
