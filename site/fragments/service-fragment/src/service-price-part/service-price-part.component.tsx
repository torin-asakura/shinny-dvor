import type { FC }                    from 'react'

import type { ServicePricePartProps } from './service-price-part.interface.js'

import React                          from 'react'

import { Condition }                  from '@ui/condition'
import { Row }                        from '@ui/layout'
import { Layout }                     from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Box }                        from '@ui/layout'
import { Text }                       from '@ui/text'
import { Space }                      from '@ui/text'
import { Ruble }                      from '@ui/text'

export const ServicePricePart: FC<ServicePricePartProps> = ({ servicePrice, addon }) => (
  <Row>
    <Text fontSize={['$xl', '$giant', '$giant']} fontWeight='$medium'>
      {servicePrice !== undefined && servicePrice}
      <Space />
      <Ruble />
    </Text>
    <Layout flexBasis={24} />
    <Column justifyContent='center'>
      <Condition match={Boolean(addon)}>
        <Box height={28} backgroundColor='$lightGray' padding='6px 10px' borderRadius='$normal'>
          <Text color='$darkGray'>{addon}</Text>
        </Box>
      </Condition>
    </Column>
  </Row>
)
