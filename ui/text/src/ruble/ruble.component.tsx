import { memo } from 'react'
import React    from 'react'

import { span } from './ruble.css.js'

export const Ruble = memo(() => <span className={span}>{'\u20BD'}</span>)
