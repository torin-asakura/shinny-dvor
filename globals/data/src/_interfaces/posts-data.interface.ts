import type { BlogPostsQueryDataType } from '@globals/data'

type PostsType = Exclude<BlogPostsQueryDataType['posts'], null | undefined>
export type PostsDataType = PostsType['nodes']
