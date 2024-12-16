import type { FC }               from 'react'

import type { SocialLinksProps } from './social-links.interface.js'

import React                     from 'react'

import { Button }                from '@ui/button'
import { TelegramIcon }          from '@ui/icons'
import { VkIcon }                from '@ui/icons'
import { Box }                   from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Link }                  from '@ui/link'

export const SocialLinksDark = () => {
  return <h1>SocialLinksDark</h1>
}

// export const SocialLinksDark: FC<SocialLinksProps> = ({ linkTelegram, linkVk }) => (
//   <Box width='100%' justifyContent='flex-end'>
//     <Link href={linkTelegram} target='_blank'>
//       <Box width={40}>
//         <Button color='darkSocial' size='small'>
//           <Layout>
//             <TelegramIcon width={28} height={28} color='white' />
//           </Layout>
//         </Button>
//       </Box>
//     </Link>
//     <Layout flexBasis={16} flexShrink={0} />
//     <Link href={linkVk} target='_blank'>
//       <Box width={40}>
//         <Button color='darkSocial' size='small'>
//           <Layout>
//             <VkIcon width={21} height={12} color='white' />
//           </Layout>
//         </Button>
//       </Box>
//     </Link>
//   </Box>
// )
