import type { RadiiProps } from './radii.interface.js'
import type { FC }         from 'react'

import React               from 'react'

import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Radio }           from '@ui/radio'

const Radii: FC<RadiiProps> = ({ items, selectedItem, setSelectedItem }) => (
  <Box width='100%' border='grey' borderRadius='$little'>
    <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '24px' }} flexShrink={0} />
    <Column fill>
      <Layout flexBasis='24px' />
      <Row flexWrap='wrap'>
        {items.map((title, index) => (
          <React.Fragment key={title}>
            <Box
              minWidth='61px'
              flexGrow={{ mobile: 0, tablet: 0, desktop: 1 }}
              onClick={(): void => {
                setSelectedItem(title)
              }}
            >
              <Radio checked={selectedItem === title} textTransform='uppercase'>
                {title}
              </Radio>
            </Box>
            <Layout
              flexBasis={{
                mobile: '12px',
                tablet: '12px',
                desktop: items.length - 1 === index ? 0 : '12px',
              }}
              flexShrink={0}
            />
          </React.Fragment>
        ))}
      </Row>
      <Layout flexBasis={12} />
    </Column>
    <Layout flexBasis={[8, 8, 24]} flexShrink={0} />
  </Box>
)

export { Radii }
