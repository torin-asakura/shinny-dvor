import type { FC } from 'react'

export type UseNextNavLinkType = (Link: FC<any>, pathProp?: string) => (props: any) => JSX.Element
