import type { FC } from 'react'

import React       from 'react'

import { Column }  from '@ui/layout'
import { Text }    from '@ui/text'

interface TitlePartProps {
  title: string
  subTitle: string
}

export const TitlePart: FC<TitlePartProps> = ({ title, subTitle }) => (
  <Column gap={['g8', 'g8', 'g16']} alignItems='center'>
    <Text fontWeight='$normal' fontSize='$giant' lineHeight='$grown'>
      {title}
    </Text>
    <Text fontWeight='$normal' fontSize='$normal' color='$darkGray'>
      {subTitle}
    </Text>
  </Column>
)
