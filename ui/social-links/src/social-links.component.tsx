import type { SocialLinksProps } from './social-links.interface.js'
import type { FC }               from 'react'

import React                     from 'react'

import { Button }                from '@ui/button'
import { VkIcon }                from '@ui/icons'
import { TelegramIcon }          from '@ui/icons'
import { Box }                   from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Link }                  from '@ui/link'
import { useHover }              from '@ui/utils'

export const SocialLinks = () => {
  return <h1>SocialLinks</h1>
}

// const SocialLinks: FC<SocialLinksProps> = ({ linkTelegram, linkVk }) => {
//   const [hoverTelegram, hoverTelegramProps] = useHover()
//   const [hoverVk, hoverVkProps] = useHover()
//
//   return (
//     <Box width='100%' justifyContent='flex-end'>
//       <Box width={48} height={48} borderRadius={24} overflow='hidden' {...hoverTelegramProps}>
//         <Link width='100%' href={linkTelegram} target='_blank'>
//           <Button color='radius'>
//             <TelegramIcon width={36} height={36} color={hoverTelegram ? 'white' : 'black'} />
//           </Button>
//         </Link>
//       </Box>
//       <Layout flexBasis={16} flexShrink={0} />
//       <Box width={48} height={48} borderRadius={24} overflow='hidden' {...hoverVkProps}>
//         <Link width='100%' href={linkVk} target='_blank'>
//           <Button color='radius'>
//             <VkIcon width={28} height={28} color={hoverVk ? 'white' : 'black'} />
//           </Button>
//         </Link>
//       </Box>
//     </Box>
//   )
// }
