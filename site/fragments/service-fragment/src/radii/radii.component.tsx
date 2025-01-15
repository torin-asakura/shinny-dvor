import type { FC }         from 'react'

import type { RadiiProps } from './radii.interface.js'

import React               from 'react'

import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Radio }           from '@ui/radio'

export const Radii: FC<RadiiProps> = ({ items, selectedItem, setSelectedItem }) => (
  <Box width='$fill' border='$shark' borderRadius='$little' padding={['$g20', '$g20', '$g24']}>
    <Row flexWrap={['wrap', 'wrap', 'nowrap']} gap='$g12'>
      {items.map((title, index) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={`radii-box-${index}`}
          width={['$g56', '$g56', '$fill']}
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
