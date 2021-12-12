import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { Box }              from '@ui/layout'
import { VkIcon }           from '@ui/icons'
import { FacebookIcon }     from '@ui/icons'
import { Layout }           from '@ui/layout'
import { Condition }        from '@ui/condition'
import { Link }             from '@ui/link'
import { Text }             from '@ui/text'

import { SocialLinksProps } from './social-links.interface'
import { DarkItem }         from './dark-item'
import { LightItem }        from './light-item'

const SocialLinks: FC<SocialLinksProps> = ({ pageStyle = 'light' }) => {
  const [onFacebookHover, setOnFacebookHover] = useState(false)
  const [onVkHover, setOnVkHover] = useState(false)
  return (
    <Box width='100%' justifyContent='flex-end'>
      <Condition match={pageStyle === 'dark'}>
        <Link href='/'>
          <DarkItem>
            <Layout>
              <Text fontWeight='bold' fontSize='small'>
                fb
              </Text>
            </Layout>
          </DarkItem>
        </Link>
        <Layout flexBasis={16} flexShrink={0} />
        <Link href='/'>
          <DarkItem>
            <Layout>
              <Text fontWeight='bold' fontSize='small'>
                vk
              </Text>
            </Layout>
          </DarkItem>
        </Link>
      </Condition>
      <Condition match={pageStyle === 'light'}>
        <Link href='/'>
          <Layout
            onMouseOver={() => setOnFacebookHover(true)}
            onMouseLeave={() => setOnFacebookHover(false)}
          >
            <LightItem>
              <FacebookIcon width={24} height={24} color={onFacebookHover ? 'white' : 'black'} />
            </LightItem>
          </Layout>
        </Link>
        <Layout flexBasis={16} flexShrink={0} />
        <Link href='/'>
          <Layout onMouseOver={() => setOnVkHover(true)} onMouseLeave={() => setOnVkHover(false)}>
            <LightItem>
              <VkIcon width={24} height={24} color={onVkHover ? 'white' : 'black'} />
            </LightItem>
          </Layout>
        </Link>
      </Condition>
    </Box>
  )
}

export { SocialLinks }
