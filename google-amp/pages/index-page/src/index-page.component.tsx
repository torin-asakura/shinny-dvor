import type { FC }              from 'react'

import React                    from 'react'

import { BeforeAfterFragment }  from '@google-amp/before-after-fragment'
import { BlogPostsList }        from '@google-amp/blog-posts-list-fragment'
import { FooterFragment }       from '@google-amp/footer-fragment'
import { HeaderFragment }       from '@google-amp/header-fragment'
import { HeroFragment }         from '@google-amp/hero-fragment'
import { ServicesListFragment } from '@google-amp/services-list-fragment'

export const IndexPage: FC = () => (
  <>
    <HeaderFragment />
    <HeroFragment />
    <ServicesListFragment />
    <BlogPostsList />
    <BeforeAfterFragment />
    <FooterFragment />
  </>
)
