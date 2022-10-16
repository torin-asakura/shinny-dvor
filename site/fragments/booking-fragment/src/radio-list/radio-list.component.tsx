import React              from 'react'
import { FC }             from 'react'
import { useState }       from 'react'

import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Radio }          from '@ui/radio'
import { validateButton } from '@store/actions'

import { RadioListProps } from './radio-list.interface'

const RadioList: FC<RadioListProps> = ({
  items,
  id,
  selectedItem,
  setSelectedItem,
  width = '100%',
}) => {
  const [checked] = useState<boolean>(false)

  return (
    <Row justifyContent='space-between' flexWrap='wrap'>
      {items.map((title) => (
        <Box
          width={width}
          onClick={() => {
            validateButton(id, checked)
            setSelectedItem(title)
          }}
        >
          <Radio checked={selectedItem === title}>{title}</Radio>
        </Box>
      ))}
    </Row>
  )
}

export { RadioList }
