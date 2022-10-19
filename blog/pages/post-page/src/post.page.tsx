import React          from 'react'
import { FC }         from 'react'

import { Article }    from '@fragments/blog-articles-fragment'
import { Footer }     from '@fragments/footer-fragment'
import { Navigation } from '@fragments/navigation-fragment'
import { Column }     from '@ui/layout'

interface Props {
  data: any
}

const PostPage: FC<Props> = ({
  data: { contacts, post, navigation, availableRadii, fragments, carBodies, services },
}) => (
  <Column width='100%' alignItems='center'>
    <Navigation
      active={2}
      availableRadiiData={availableRadii}
      navigationData={navigation}
      fragmentsData={fragments}
      carBodiesData={carBodies}
      servicesData={services}
    />
    <Article postData={post} fragmentsData={fragments} />
    <Footer fragmentsData={fragments} contactsData={contacts} />
  </Column>
)

export default PostPage
