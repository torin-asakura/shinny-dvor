/* eslint-disable */

import type { SuccessProps } from './success.interface.js'
import type { FC }           from 'react'

import React                 from 'react'

import { INITIAL }           from '@store/booking'
import { Button }            from '@ui/button'
import { Column }            from '@ui/layout'
import { Box }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { NextLink }          from '@ui/link'
import { Text }              from '@ui/text'
import { extractFragment }   from '@globals/data'
import { screenVar }         from '@store/booking'

const Success: FC<SuccessProps> = ({ setVisible, fragmentsData }) => {
  const { title, content, highlightedtext } = extractFragment(
    'contentAddons',
    'success',
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
      <NextLink path='/'>
        <Box width='100%'>
          <Button
            color='secondary'
            onClick={() => {
              setVisible(false)
              screenVar(INITIAL)
            }}
          >
            {highlightedtext}
          </Button>
        </Box>
      </NextLink>
      <Layout flexBasis={{ mobile: '48px', tablet: '48px', desktop: '128px' }} />
    </Column>
  )
}

export { Success }
