import type { FC }               from 'react'

import type { SocialLinksProps } from './social-links.interface.js'

import React                     from 'react'

import { TelegramIcon }          from '@ui/icons'
import { VkIcon }                from '@ui/icons'
import { Box }                   from '@ui/layout'

import { IconPart }              from './icon-part/index.js'

export const SocialLinks: FC<SocialLinksProps> = ({
  linkTelegram,
  linkVk,
  variant,
  buttonSize,
  size = 36,
}) => {
  const isDark = variant === 'dark'
  return (
    <Box justifyContent='flex-end' gap='$g16'>
      <IconPart
        Icon={TelegramIcon}
        href={linkTelegram}
        size={size}
        dark={isDark}
        buttonSize={buttonSize}
      />
      <IconPart Icon={VkIcon} href={linkVk} dark={isDark} buttonSize={buttonSize} />
    </Box>
  )
}
