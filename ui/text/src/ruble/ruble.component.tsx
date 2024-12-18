import React    from 'react'

import { span } from './ruble.css.js'

export const Ruble = (): JSX.Element => {
  return <span className={span}>{'\u20BD'}</span>
}
