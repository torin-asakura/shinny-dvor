export type OnIntersection = (id: string) => void
export type Observer = { ref: any }
export type Observers = Map<string, { ref: any }>
export type IntersectionObservers = Map<number, IntersectionObserver>
export type UseIntersectionObserver = (onIntersection: OnIntersection) => void
export type GetObserverOptions = (id: string) => { ref: any }
