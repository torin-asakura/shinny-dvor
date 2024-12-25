import type { FragmentsDataType } from '@globals/data'
import type { PostByType }        from '@globals/data'

export type RequiredPostByType = globals.NonNullableObject<PostByType>

export interface ArticleProps {
  fragmentsData: FragmentsDataType
  postData: RequiredPostByType
}
