declare namespace globals {
  type ArrayElement<A> = A extends ReadonlyArray<infer T> ? T : never
  type NonNullable<T> = Exclude<T, null | undefined>

  type NonNullableObject<T> = NonNullable<{ [P in keyof T]-?: NonNullableObject<T[P]> }>

  type SetState<T> = React.Dispatch<React.SetStateAction<T>>
}
