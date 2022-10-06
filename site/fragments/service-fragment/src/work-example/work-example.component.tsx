import React                from 'react'
import { FC }               from 'react'

import { ImageBlock }       from '@ui/image'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'
import { Ruble }            from '@ui/text'

import { WorkExampleProps } from './work-example.interface'

const WorkExample: FC<WorkExampleProps> = ({ image, title, price }) => (
  <Row maxWidth={405} height={382}>
    <Column fill>
      <Layout maxWidth={405} maxHeight={320}>
        <ImageBlock src={image.sourceUrl} alt={image.altText} width={405} height={320} />
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Text fontWeight='medium' fontSize='normal' color='text.primary'>
          {title}
        </Text>
      </Layout>
      <Layout flexBasis={8} />
      <Layout>
        <Text fontWeight='medium' fontSize='normal' color='text.primary'>
          {price}
          <Space />
          <Ruble />
        </Text>
      </Layout>
    </Column>
  </Row>
)

export { WorkExample }
