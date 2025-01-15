import type { FC }                              from 'react'

import type { WorkExamplesDesktopVariantProps } from './work-examples-desktop-variant.interface.js'

import React                                    from 'react'

import { Accordion }                            from '@ui/accordion'
import { Condition }                            from '@ui/condition'
import { Row }                                  from '@ui/layout'
import { Box }                                  from '@ui/layout'
import { Layout }                               from '@ui/layout'

import { WorkExample }                          from '../work-example/work-example.component.js'

export const WorkExamplesDesktopVariant: FC<WorkExamplesDesktopVariantProps> = ({
  workExamplesTitle,
  workExamplesData,
  defaultPrice,
}) => (
  <Row display={['none', 'none', 'flex']}>
    <Accordion text={workExamplesTitle}>
      <Box width='100%' justifyContent='center' borderRadius='$little' backgroundColor='$lightGray'>
        {workExamplesData?.map(({ image, title, price: cost }, index) => (
          <React.Fragment key={title}>
            <WorkExample image={image} title={title} price={defaultPrice} />
            <Condition match={index === 0}>
              <Layout flexBasis={16} flexShrink={0} />
            </Condition>
          </React.Fragment>
        ))}
      </Box>
    </Accordion>
  </Row>
)
