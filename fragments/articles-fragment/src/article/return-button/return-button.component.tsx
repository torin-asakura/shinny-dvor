import React            from 'react'
import { FC }           from 'react'
import { useState }     from 'react'

import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Button }       from '@ui/button'
import { BackIcon }     from '@ui/icons'
import { Text }         from '@ui/text'
import { screenVar }    from '@store/articles'
import { ALL_ARTICLES } from '@store/articles'

const ReturnButton: FC = () => {
  const [onHover, setOnHover] = useState(false)
  const [, setOnPressed] = useState(false)
  const doReturn = () => {
    setOnPressed(true)
    screenVar(ALL_ARTICLES)
  }
  const getColor = () => {
    let color = 'lightGray'
    if (onHover) {
      color = 'white'
    }
    return color
  }
  return (
    <Button
      color='transparent'
      size='ghost'
      onClick={() => doReturn()}
      onMouseOver={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Box width={102} alignItems='center'>
        <Layout>
          <BackIcon width={12} height={24} color={getColor()} />
        </Layout>
        <Layout flexBasis={8} />
        <Layout>
          <Text fontWeight='medium' color={getColor()}>
            Button
          </Text>
        </Layout>
      </Box>
    </Button>
  )
}

export { ReturnButton }
