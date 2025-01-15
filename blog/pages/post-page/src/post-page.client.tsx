'use client'

import type { FC }                  from 'react'

import type { PostPageClientProps } from './post-page.interfaces.js'
import type { RequiredPostByType }  from './post-page.interfaces.js'

import React                        from 'react'

import { Article }                  from '@blog/article-fragment'
import { Footer }                   from '@fragments/footer-fragment'
import { Navigation }               from '@fragments/navigation-fragment'
import { Column }                   from '@ui/layout'
import { getContactsData }          from '@globals/data'
import { getPostData }              from '@globals/data'
import { getNavigationData }        from '@globals/data'
import { getAvailableRadiiData }    from '@globals/data'
import { getFragmentsData }         from '@globals/data'
import { getCarBodiesData }         from '@globals/data'
import { getServicesData }          from '@globals/data'

import { PostPageStyles }           from './post-page.style.js'

export const PostPageClient: FC<PostPageClientProps> = ({ params }) => {
  const { uri } = params

  const { navigation } = getNavigationData()
  const { availableRadii } = getAvailableRadiiData()
  const { fragments } = getFragmentsData()
  const { carBodies } = getCarBodiesData()
  const { services } = getServicesData()
  const { postBy } = getPostData(uri)
  const { contacts } = getContactsData()

  return (
    <>
      <PostPageStyles />
      <Column fill alignItems='center'>
        <Navigation
          navigationItemsType='blog-nav-item'
          backgroundColor='white'
          availableRadiiData={availableRadii}
          navigationData={navigation}
          fragmentsData={fragments}
          carBodiesData={carBodies}
          servicesData={services}
        />
        <Article postData={postBy as RequiredPostByType} fragmentsData={fragments} />
        <Footer
          fragmentsData={fragments}
          contactsData={contacts}
          navigationItemsType='blog-nav-item'
        />
      </Column>
    </>
  )
}
