export type ArrayElement<A> = A extends ReadonlyArray<infer T> ? T : never
export type NonNullable<T> = Exclude<T, null | undefined>
