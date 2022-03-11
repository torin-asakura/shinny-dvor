import React          from 'react'
import { FC }         from 'react'

import { radiusVar }  from '@store/chosen-radius'
import { chosenVar }  from '@store/chosen-radius'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/text'
import { Button }     from '@ui/button'
import { Layout }     from '@ui/layout'

const SizeButtonDropdown: FC = () => {
  const availableRadii = ['R12', 'R13', 'R14', 'R15', 'R16', 'R17', 'R18', 'R19', 'R20', 'R21']
  const setChosenRadius = ({ item }) => {
    radiusVar(item)
    chosenVar(true)
  }

  return (
    <Box>
        <Column height={[108, 48, 48]}>
          {availableRadii.map((item) => (
            <>
              <Box width={48} height={48}>
                <Button color='radius' onClick={() => setChosenRadius({ item })}>
                  <Layout>
                    <Text fontSize='small'>{item}</Text>
                  </Layout>
                </Button>
              </Box>
              <Layout flexBasis={[12, 16, 16]} />
            </>
          ))}
        </Column>
    </Box>
  )
}

export { SizeButtonDropdown }
