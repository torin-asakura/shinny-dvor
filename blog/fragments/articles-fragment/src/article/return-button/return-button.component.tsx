import type { ReturnButtonProps } from './return-button.interface.js'
import type { FC }                from 'react'

import React                      from 'react'
import { useRouter }              from 'next/navigation.js'
import { memo }                   from 'react'

import { Button }                 from '@ui/button'
import { BackIcon }               from '@ui/icons'
import { Box }                    from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Text }                   from '@ui/text'
import { useHover }               from '@ui/utils'

const ReturnButton: FC<ReturnButtonProps> = memo(({ title }: ReturnButtonProps) => {
  const [hover, hoverProps] = useHover()

  const router = useRouter()

  const handleButtonClick = (): void => {
    router.replace('/')
  }

  return (
    <Button color='grey' size='ghost' onClick={handleButtonClick} {...hoverProps}>
      <Box width={102} alignItems='center'>
        <Layout>
          <BackIcon width={12} height={24} color={hover ? 'white' : 'charcoal'} />
        </Layout>
        <Layout flexBasis={8} />
        <Layout>
          <Text fontWeight='$medium'>{title}</Text>
        </Layout>
      </Box>
    </Button>
  )
})

export { ReturnButton }
