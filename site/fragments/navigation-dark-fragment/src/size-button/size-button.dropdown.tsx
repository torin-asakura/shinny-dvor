import React                       from 'react'
import { FC }                      from 'react'

import { Button }                  from '@ui/button'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Text }                    from '@ui/text'
import { setChosenRadius }         from '@store/actions'
import { checkedRadiusVar }        from '@store/chosen-radius'

import { SizeButtonDropdownProps } from './size-button-dropdown.interface'
import { useMockedRadii }          from '../data'

const SizeButtonDropdown: FC<SizeButtonDropdownProps> = ({ setOpen }) => {
  const { radii } = useMockedRadii()

  return (
    <Box
      height={616}
      width={56}
      borderRadius='32px'
      backgroundColor='white'
      justifyContent='center'
      boxShadow='deep'
    >
      <Column justifyContent='space-around'>
        {radii.map(({ id, radius }) => (
          <Box key={id} width={48} height={48}>
            <Button
              color='radius'
              onClick={() => {
                setOpen(false)
                setChosenRadius(radius)
                checkedRadiusVar(false)
              }}
            >
              <Layout>
                <Text fontSize='small' fontWeight='medium'>
                  {radius}
                </Text>
              </Layout>
            </Button>
          </Box>
        ))}
      </Column>
    </Box>
  )
}

export { SizeButtonDropdown }
