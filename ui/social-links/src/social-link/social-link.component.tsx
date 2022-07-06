import React               from 'react'
import { FC }              from 'react'
import { useState }        from 'react'

import { Button }          from '@ui/button'
import { Condition }       from '@ui/condition'
import { VkIcon }          from '@ui/icons'
import { FacebookIcon }    from '@ui/icons'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'

import { SocialLinkProps } from './social-link.interface'

const SocialLink: FC<SocialLinkProps> = ({ social }) => {
  const [onHover, setOnHover] = useState(false)
  return (
    <Box width={48} height={48}>
      <Condition match={social === 'vk'}>
        <Button
          color='radius'
          onMouseOver={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <Layout>
            <VkIcon width={28} height={28} color={onHover ? 'white' : 'black'} />
          </Layout>
        </Button>
      </Condition>
      <Condition match={social === 'facebook'}>
        <Button
          color='radius'
          onMouseOver={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <Layout>
            <FacebookIcon width={28} height={28} color={onHover ? 'white' : 'black'} />
          </Layout>
        </Button>
      </Condition>
    </Box>
  )
}

export { SocialLink }
