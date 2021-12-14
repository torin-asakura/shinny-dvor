import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'
import { Button }          from '@ui/button'
import { Layout }          from '@ui/layout'
import { Link }            from '@ui/link'
import { Text }            from '@ui/text'

import { SocialLinkProps } from './social-link.interface'

const SocialLink: FC<SocialLinkProps> = ({ social }) => (
  <Link href='/'>
    <Box width={48} height={48}>
      <Button color='radius'>
        <Layout>
          <Text fontWeight='bold' fontSize='small'>
            {social}
          </Text>
        </Layout>
      </Button>
    </Box>
  </Link>
)

export { SocialLink }
