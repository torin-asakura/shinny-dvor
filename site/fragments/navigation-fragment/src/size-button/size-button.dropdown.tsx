import { useReactiveVar }          from '@apollo/client'

import React                       from 'react'
import { FC }                      from 'react'

import { Button }                  from '@ui/button'
import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Text }                    from '@ui/text'
import { setChosenRadius }         from '@store/actions'
import { checkedRadiusVar }        from '@store/chosen-radius'
import { radiusVar }               from '@store/chosen-radius'

import { SizeButtonDropdownProps } from './size-button-dropdown.interface'

const SizeButtonDropdown: FC<SizeButtonDropdownProps> = ({ setOpen, radii }) => {
  const radius = useReactiveVar<string>(radiusVar)

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
        {radii.map(({ contentAddons: { title } }) => (
          <Box key={title} width={48} height={48}>
            <Button
              color={radius === title ? 'primary' : 'radius'}
              onClick={() => {
                setOpen(false)
                setChosenRadius(title)
                checkedRadiusVar(false)
              }}
            >
              <Layout>
                <Text fontSize='small' fontWeight='medium'>
                  {title}
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
