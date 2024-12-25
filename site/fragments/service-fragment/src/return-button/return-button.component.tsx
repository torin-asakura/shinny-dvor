import type { ReturnButtonProps } from './return-button.interface.js'
import type { FC }                from 'react'

import React                      from 'react'
import { useRouter }              from 'next/navigation.js'
import { memo }                   from 'react'

import { Button }                 from '@ui/button'
import { BackIcon }               from '@ui/icons'
import { Box }                    from '@ui/layout'
import { Text }                   from '@ui/text'
import { useHover }               from '@ui/utils'

export const ReturnButton: FC<ReturnButtonProps> = memo(({ title }) => {
  const [hover, hoverProps] = useHover()
  const router = useRouter()

  const handlerClick = (): void => {
    router.replace('/services')
  }

  return (
    <Box>
      <Button
        variant='link'
        size='ghost'
        onClick={handlerClick}
        {...hoverProps}
        icon={<BackIcon width={12} height={24} color={hover ? 'primaryBlue' : 'black'} />}
        style={{ gap: '8px', width: 'auto' }}
      >
        <Text fontWeight='$medium' color={hover ? '$primaryBlue' : '$black'}>
          {title}
        </Text>
      </Button>
    </Box>
  )
})
