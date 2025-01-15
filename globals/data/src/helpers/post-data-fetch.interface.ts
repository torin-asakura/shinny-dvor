type PostDataFetchProps = {
  url: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>
}

type PostDataFetchType = (props: PostDataFetchProps) => Promise<Response>

export type { PostDataFetchType }
