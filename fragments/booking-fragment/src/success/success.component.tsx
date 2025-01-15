import type { FC }           from 'react'

import type { SuccessProps } from './success.interface.js'

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
      <Layout flexBasis={[48, 48, 128]} />
    </Column>
  )
}

export { Success }
