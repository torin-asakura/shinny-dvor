type FetchTelegramBotHelperProps = {
  url: string
  data: Record<string, any>
}

type FetchTelegramBotHelperType = (props: FetchTelegramBotHelperProps) => Promise<Response>

export type { FetchTelegramBotHelperType }
