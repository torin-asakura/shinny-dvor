import { FC } from 'react'

export type CreateNextNavLinkType = (
  Link: FC<any>,
  pathProp?: string
) => (props: any) => JSX.Element
