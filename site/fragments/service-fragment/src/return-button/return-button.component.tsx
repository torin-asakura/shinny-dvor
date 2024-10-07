/* eslint-disable */

import type { FC }                from 'react'

import type { ReturnButtonProps } from './return-button.interface.js'

import { useRouter }              from 'next/navigation.js'
import { memo }                   from 'react'
import { useState }               from 'react'
import React                      from 'react'

import { Button }                 from '@ui/button'
import { BackIcon }               from '@ui/icons'
import { Box }                    from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Text }                   from '@ui/text'

const ReturnButton: FC<ReturnButtonProps> = memo(({ title }) => {
  const [onHover, setOnHover] = useState(false)

  const router = useRouter()

  const handlerMouseOver = (): void => {
    setOnHover(true)
  }

  const handlerMouseLeave = (): void => {
    setOnHover(false)
  }

  const handlerClick = (): void => {
    router.replace('/services')
  }

  return (
    <Button color='blueText' size='ghost'>
      <Box
        width={102}
        alignItems='center'
        onMouseOver={handlerMouseOver}
        onMouseLeave={handlerMouseLeave}
        onClick={handlerClick}
      >
        <Layout>
          <BackIcon width={12} height={24} color={onHover ? 'blue' : 'black'} />
        </Layout>
        <Layout flexBasis={8} />
        <Layout>
          <Text fontWeight='medium'>{title}</Text>
        </Layout>
      </Box>
    </Button>
  )
})

export { ReturnButton }
