import { makeVar }      from '@apollo/client'

import { Screen }       from './store.interfaces'
import { ALL_ARTICLES } from './store.constants'

export const screenVar = makeVar<Screen>(ALL_ARTICLES)
