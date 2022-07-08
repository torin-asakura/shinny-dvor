import React            from 'react'
import { FC }           from 'react'

import { ALL_ARTICLES } from '@store/articles'
import { Button }       from '@ui/button'
import { BackIcon }     from '@ui/icons'
import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Text }         from '@ui/text'
import { screenVar }    from '@store/articles'
import { useHover }     from '@ui/utils'

const ReturnButton: FC = () => {
  const [hover, hoverProps] = useHover()

  return (
    <Button color='grey' size='ghost' onClick={() => screenVar(ALL_ARTICLES)} {...hoverProps}>
      <Box width={102} alignItems='center'>
        <Layout>
          <BackIcon width={12} height={24} color={hover ? 'white' : 'charcoal'} />
        </Layout>
        <Layout flexBasis={8} />
        <Layout>
          <Text fontWeight='medium'>Button</Text>
        </Layout>
      </Box>
    </Button>
  )
}

export { ReturnButton }
