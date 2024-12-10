import type { BottomContentPartProps } from './bottom-content-part.interface.js'
import type { FC }                     from 'react'

import React                           from 'react'

import { Divider }                     from '@ui/divider'
import { Row }                         from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Box }                         from '@ui/layout'
import { ResponsiveBox }               from '@ui/layout'
import { Link }                        from '@ui/link'
import { Text }                        from '@ui/text'
import { Space }                       from '@ui/text'
import { normalizeString }             from '@shared/utils'

import { stringSeparator }             from '../helpers/index.js'

export const BottomContentPart: FC<BottomContentPartProps> = ({
  workingHours,
  telephone,
  appointmentPhone,
  byObj,
  adress,
}) => {
  const { firstPart, secondPart } = stringSeparator(workingHours)

  const by = new Map<string, string | undefined>()
  by.set('title', byObj?.title)
  by.set('content', byObj?.highlightedtext)
  by.set('link', byObj?.content)

  return (
    <ResponsiveBox
      width='100%'
      backgroundColor={{ mobile: '$lightBlue', tablet: '$primaryBlue', desktop: '$gray900' }}
      alignItems='center'
    >
      bla
    </ResponsiveBox>
  )
}
