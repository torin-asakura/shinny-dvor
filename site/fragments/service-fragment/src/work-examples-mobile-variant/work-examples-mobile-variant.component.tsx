import type { FC }                             from 'react'

import type { WorkExamplesMobileVariantProps } from './work-examples-mobile-variant.interface.js'

import React                                   from 'react'

import { Accordion }                           from '@ui/accordion'
import { Condition }                           from '@ui/condition'
import { Row }                                 from '@ui/layout'
import { Layout }                              from '@ui/layout'

import { WorkExamplesCarousel }                from '../carousel/index.js'
import { WorkExample }                         from '../work-example/index.js'

export const WorkExamplesMobileVariant: FC<WorkExamplesMobileVariantProps> = ({
  workExamplesData,
  workExamplesTitle,
  defaultPrice,
}) => (
  <Row display={['flex', 'flex', 'none']}>
    <Accordion text={workExamplesTitle}>
      <WorkExamplesCarousel>
        {workExamplesData?.map(({ image, title, price: cost }, index) => (
          <React.Fragment key={title}>
            <WorkExample image={image} title={title} price={defaultPrice} />
            <Condition match={index === 0}>
              <Layout flexBasis={32} flexShrink={0} />
            </Condition>
          </React.Fragment>
        ))}
      </WorkExamplesCarousel>
    </Accordion>
  </Row>
)
