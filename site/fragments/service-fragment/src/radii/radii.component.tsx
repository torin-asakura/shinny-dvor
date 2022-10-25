import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Radio }      from '@ui/radio'

import { RadiiProps } from './radii.interface'

const Radii: FC<RadiiProps> = ({ items, selectedItem, setSelectedItem }) => (
  <Box width='100%' border='grey' borderRadius='little'>
    <Layout flexBasis={[20, 20, 24]} flexShrink={0} />
    <Column fill>
      <Layout flexBasis={24} />
      <Row justifyContent='flex-start' flexWrap='wrap'>
        {items.map((title) => (
          <Box
            minWidth={[61, 61, 73]}
            onClick={() => {
              setSelectedItem(title)
            }}
          >
            <Radio checked={selectedItem === title} textTransform='uppercase'>
              {title}
            </Radio>
            <Layout flexBasis={[12, 12, 12]} flexShrink={0} />
          </Box>
        ))}
      </Row>
      <Layout flexBasis={12} />
    </Column>
    <Layout flexBasis={[8, 8, 24]} flexShrink={0} />
  </Box>
)

export { Radii }
