import { FC }             from 'react'
import React              from 'react'

import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Radio }          from '@ui/radio'

import { RadioListProps } from './radio-list.interface.js'

const RadioList: FC<RadioListProps> = ({
  items,
  selectedItem,
  setSelectedItem,
  textTransform = 'lowercase',
  width = '100%',
}) => (
  <Row justifyContent='space-between' flexWrap='wrap'>
    {items.map((title) => (
      <Box
        width={width}
        onClick={() => {
          setSelectedItem(title)
        }}
      >
        <Radio checked={selectedItem === title} textTransform={textTransform}>
          {title}
        </Radio>
      </Box>
    ))}
  </Row>
)

export { RadioList }
