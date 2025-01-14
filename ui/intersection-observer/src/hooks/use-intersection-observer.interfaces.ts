import type { MutableRefObject } from 'react'

export type OnIntersection = (id: string) => void
export type Observer = { ref: MutableRefObject<any> }
export type Observers = Map<string, { ref: MutableRefObject<any> }>
export type IntersectionObservers = Map<number, IntersectionObserver>
export type UseIntersectionObserver = (onIntersection: OnIntersection) => void
export type GetObserverOptions = (id: string) => { ref: React.MutableRefObject<null> }
