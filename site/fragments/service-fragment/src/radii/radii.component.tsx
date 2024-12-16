import type { FC }         from 'react'

import type { RadiiProps } from './radii.interface.js'

import React               from 'react'

import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Radio }           from '@ui/radio'

const Radii: FC<RadiiProps> = ({ items, selectedItem, setSelectedItem }) => (
  <Box width='100%' border='$grey' borderRadius='$little'>
    <Layout flexBasis={[20, 20, 24]} flexShrink={0} />
    <Column fill>
      <Layout flexBasis={24} />
      <Row flexWrap='wrap'>
        {items.map((title, index) => (
          <React.Fragment key={title}>
            <Box
              minWidth={61}
              flexGrow={[0, 0, 1]}
              onClick={(): void => {
                setSelectedItem(title)
              }}
            >
              <Radio checked={selectedItem === title} textTransform='uppercase'>
                {title}
              </Radio>
            </Box>
            <Layout flexBasis={[12, 12, items.length - 1 === index ? 0 : 12]} flexShrink={0} />
          </React.Fragment>
        ))}
      </Row>
      <Layout flexBasis={12} />
    </Column>
    <Layout flexBasis={[8, 8, 24]} flexShrink={0} />
  </Box>
)

export { Radii }
