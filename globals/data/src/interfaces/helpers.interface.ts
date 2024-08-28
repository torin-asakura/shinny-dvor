export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never
export type NonNullable<T> = Exclude<T, null | undefined>
