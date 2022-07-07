import { makeVar }      from '@apollo/client'

import { ALL_ARTICLES } from './store.constants'
import { Screen }       from './store.interfaces'
import { PostId }       from './store.interfaces'

export const screenVar = makeVar<Screen>(ALL_ARTICLES)
export const postIdVar = makeVar<PostId>('')
