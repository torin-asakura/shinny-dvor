import type { PostsDataType }      from '@globals/data'
import type { FragmentsDataType }  from '@globals/data'
import type { NavigationDataType } from '@globals/data'

export interface ArticlesProps {
  postsData: PostsDataType
  fragmentsData: FragmentsDataType
  navigationData: NavigationDataType
}
