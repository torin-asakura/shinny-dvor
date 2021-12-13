import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'

import { Radio }          from './radio.component'
import { RadioListProps } from './radio.interface'

const RadioList: FC<RadioListProps> = ({
  items,
  initial = '',
  width = '100%',
  onChoose = (item) => {},
}) => {
  const [active, setActive] = useState<string>(initial)

  return (
    <Row justifyContent='space-between' flexWrap='wrap'>
      {items.map((item, index) => (
        <Box width={width}>
          <Radio
            checked={active === item}
            value={item}
            onClick={(event) => {
              event.preventDefault()
              onChoose(item)
              setActive(item)
            }}
          />
        </Box>
      ))}
    </Row>
  )
}

export { RadioList }
