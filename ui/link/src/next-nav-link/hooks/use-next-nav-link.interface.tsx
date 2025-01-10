import type { FC } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UseNextNavLinkType = (Link: FC<any>, pathProp?: string) => (props: any) => JSX.Element
