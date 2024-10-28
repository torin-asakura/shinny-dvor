type PostDataFetchProps = {
  url: string
  data: Record<string, any>
}

type PostDataFetchType = (props: PostDataFetchProps) => Promise<Response>

export type { PostDataFetchType }
