import type { ReturnButtonProps } from './return-button.interface.js'
import type { FC }                from 'react'

import React                      from 'react'
import { useRouter }              from 'next/navigation.js'
import { memo }                   from 'react'

import { Button }                 from '@ui/button'
import { IconPlacement }          from '@ui/button'
import { BackIcon }               from '@ui/icons'
import { Box }                     from '@ui/layout'
import { Text }                   from '@ui/text'
import { useHover }               from '@ui/utils'

export const ReturnButton: FC<ReturnButtonProps> = memo(({ title }: ReturnButtonProps) => {
  const [hover, hoverProps] = useHover()
  const router = useRouter()

  const handleButtonClick = (): void => {
    router.replace('/')
  }

  return (
    <Box>
      <Button
        variant='link'
        size='ghost'
        onClick={handleButtonClick}
        {...hoverProps}
        icon={<BackIcon width={12} height={24} color={hover ? 'white' : 'charcoal'} />}
        iconPlacement={IconPlacement.LEFT}
        style={{ gap: '8px', width: 'auto' }}
      >
        <Text fontWeight='$medium' color={hover ? '$white' : '$charcoal'}>
          {title}
        </Text>
      </Button>
    </Box>
  )
})
