import type { FC }           from 'react'

import type { InvalidProps } from './invalid.interface.js'

import React                 from 'react'

import { INITIAL }           from '@store/booking'
import { Button }            from '@ui/button'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'
import { extractFragment }   from '@globals/data'
import { screenVar }         from '@store/booking'

const Invalid: FC<InvalidProps> = ({ fragmentsData }) => {
  const { title, content, highlightedtext } = extractFragment(
    'contentAddons',
    'error',
    fragmentsData
  )

  return (
    <Column width='100%'>
      <Layout flexBasis={[40, 40, 44]} />
      <Layout>
        <Text fontWeight='$medium' fontSize='$giant'>
          {title}
        </Text>
      </Layout>
      <Layout flexBasis={24} />
      <Layout>
        <Text lineHeight='$medium'>{content}</Text>
      </Layout>
      <Layout flexBasis={32} />
      <Box width='100%'>
        <Button color='secondary' onClick={() => screenVar(INITIAL)}>
          {highlightedtext}
        </Button>
      </Box>
      <Layout flexBasis={[48, 48, 128]} />
    </Column>
  )
}

export { Invalid }
