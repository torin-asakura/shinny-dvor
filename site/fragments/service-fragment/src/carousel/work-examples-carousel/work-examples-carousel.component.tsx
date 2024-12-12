import type { FC }                    from 'react'
import type { PropsWithChildren }     from 'react'

import React                          from 'react'

import { Layout }                     from '@ui/layout'

import { WorkExamplesMobileCarousel } from './work-examples-mobile-carousel/index.js'
import { WorkExamplesTabletCarousel } from './work-examples-tablet-carousel/index.js'

export const WorkExamplesCarousel: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Layout display={{ mobile: 'none', tablet: 'flex', desktop: 'none' }}>
      <WorkExamplesTabletCarousel>{children}</WorkExamplesTabletCarousel>
    </Layout>
    <Layout display={{ mobile: 'flex', tablet: 'none', desktop: 'none' }}>
      <WorkExamplesMobileCarousel>{children}</WorkExamplesMobileCarousel>
    </Layout>
  </>
)
