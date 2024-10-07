/* eslint-disable */

import type { FC }             from 'react'

import type { RadioListProps } from './radio-list.interface.js'

import React                   from 'react'

import { Box }                 from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Radio }               from '@ui/radio'

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
