import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Radio }            from '@ui/radio'
import { activeCarBodyVar } from '@store/booking'
import { activeRadiusVar }  from '@store/booking'

import { RadioListProps }   from './radio-list.interface'

const RadioList: FC<RadioListProps> = ({ items, id, initial = '', width = '100%' }) => {
  const [active, setActive] = useState<string>(initial)
  const [checked] = useState(false)

  const validateButton = () => {
    if (id === 'radius') {
      activeRadiusVar(!checked)
    } else if (id === 'carBody') {
      activeCarBodyVar(!checked)
    }
  }

  return (
    <Row justifyContent='space-between' flexWrap='wrap'>
      {items.map((item) => (
        <Box
          width={width}
          onClick={() => {
            setActive(item)
            validateButton()
          }}
        >
          <Radio checked={active === item}>{item}</Radio>
        </Box>
      ))}
    </Row>
  )
}

export { RadioList }
