/* eslint-disable */

import type { InvalidProps } from './invalid.interface.js'
import type { FC }           from 'react'

import React                 from 'react'

import { INITIAL }           from '@store/booking'
import { Button }            from '@ui/button'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'
import { extractFragment }   from '@globals/data'
import { screenVar }         from '@store/booking'

export const Invalid: FC<InvalidProps> = ({ fragmentsData }) => {
  const { title, content, highlightedtext } = extractFragment(
    'contentAddons',
    'error',
    fragmentsData
  )

  return (
    <Column width='100%'>
      <Layout flexBasis={{ mobile: '40px', tablet: '40px', desktop: '44px' }} />
      <Layout>
        <Text fontWeight='medium' fontSize='giant'>
          {title}
        </Text>
      </Layout>
      <Layout flexBasis='24px' />
      <Layout>
        <Text lineHeight='medium'>{content}</Text>
      </Layout>
      <Layout flexBasis='32px' />
      <Box width='100%'>
        <Button color='secondary' onClick={() => screenVar(INITIAL)}>
          {highlightedtext}
        </Button>
      </Box>
      <Layout flexBasis={{ mobile: '48px', tablet: '48px', desktop: '128px' }} />
    </Column>
  )
}
