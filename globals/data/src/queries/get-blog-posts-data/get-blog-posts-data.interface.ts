import type { GetPostsQuery as BlogPostsQueryDataType } from '@globals/data'

type PostsType = Exclude<BlogPostsQueryDataType['posts'], null | undefined>
export type PostsDataType = PostsType['nodes']
export type { BlogPostsQueryDataType }
