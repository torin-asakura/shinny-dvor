import type { FC }               from 'react'

import type { DescriptionProps } from './description-part.interface.js'

import React                     from 'react'

import { Column }                from '@ui/layout'
import { Text }                  from '@ui/text'

export const DescriptionPart: FC<DescriptionProps> = ({ description }) => {
  if (description) {
    return description.split('|n|').map((item: string, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Column key={`description-part-${index}`} fill>
        <Text key={item} lineHeight='$medium'>
          {item}
        </Text>
      </Column>
    ))
  }

  return null
}
