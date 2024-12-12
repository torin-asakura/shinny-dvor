import type { AdditionalServiceProps } from './additional-service.interface.js'
import type { FC }                     from 'react'

import React                           from 'react'

import { Checkbox }                    from '@ui/checkbox'
import { Box }                         from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Text }                        from '@ui/text'
import { Ruble }                       from '@ui/text'
import { Space }                       from '@ui/text'

export const AdditionalService: FC<AdditionalServiceProps> = ({
  isAdditionalService,
  setIsAdditionalService,
  additionalservice,
}) => (
  <Box
    width='100%'
    height={{ mobile: '88px', tablet: '88px', desktop: '104px' }}
    backgroundColor='$fillGray'
    borderRadius='$mini'
    alignItems='center'
  >
    <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '24px' }} />
    <Checkbox active={isAdditionalService} onCheck={setIsAdditionalService}>
      <Column justifyContent='center'>
        <Layout>
          <Text
            fontSize={{ mobile: '$big', tablet: '$big', desktop: '$large' }}
            fontWeight='$medium'
          >
            {additionalservice.title}
          </Text>
        </Layout>
        <Layout flexBasis='4px' />
        <Layout>
          <Text
            fontSize={{ mobile: '$big', tablet: '$big', desktop: '$large' }}
            fontWeight='$medium'
          >
            {additionalservice.price}
            <Space />
            <Ruble />
          </Text>
        </Layout>
      </Column>
    </Checkbox>
    <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '24px' }} />
  </Box>
)
