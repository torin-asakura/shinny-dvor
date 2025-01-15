import type { PropsWithChildren } from 'react'

export interface RootLayoutProps extends PropsWithChildren {
  messages: Record<string, string>
}
