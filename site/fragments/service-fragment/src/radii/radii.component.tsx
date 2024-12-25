import type { FC }         from 'react'

import type { RadiiProps } from './radii.interface.js'

import React               from 'react'

import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Radio }           from '@ui/radio'

export const Radii: FC<RadiiProps> = ({ items, selectedItem, setSelectedItem }) => (
  <Box
    width='$fill'
    border={['$none', '$shark', '$shark']}
    borderRadius='$little'
    padding={['0', '$g24', '$g24']}
  >
    <Row flexWrap={['wrap', 'wrap', 'nowrap']} gap='$g12'>
      {items.map((title) => (
        <Box
          width={['$g64', '$g64', '$fill']}
          onClick={(): void => {
            setSelectedItem(title)
          }}
        >
          <Radio checked={selectedItem === title} textTransform='uppercase'>
            {title}
          </Radio>
        </Box>
      ))}
    </Row>
  </Box>
)
