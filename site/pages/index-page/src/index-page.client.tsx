'use client'

import type { IndexPageClientProps } from './index-page.interfaces.js'
import type { FC }                   from 'react'

import { useSuspenseQuery }          from '@apollo/client'

import React                         from 'react'
import { useRef }                    from 'react'
import { useState }                  from 'react'

import { Footer }                    from '@fragments/footer-fragment'
import { Navigation }                from '@fragments/navigation-fragment'
import { GET_SITE_INDEX_PAGE_SEO }   from '@globals/data'
import { Articles }                  from '@site/articles-fragment'
import { Hero }                      from '@site/hero-fragment'
import { Services }                  from '@site/services-fragment'
import { ServicesInfographics }      from '@site/services-infographics-fragment'
import { WorksExamples }             from '@site/works-examples-fragment'
import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'

import { Seo }                       from './seo.component.js'
import { useIndexPageClient }        from './hooks/use-index-page-client.hook.js'

export const IndexPageClient: FC<IndexPageClientProps> = () => {
  const { data } = useSuspenseQuery(GET_SITE_INDEX_PAGE_SEO)
  console.log(data)

  return <>blaaaabbb</>
}
