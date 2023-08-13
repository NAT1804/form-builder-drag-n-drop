export type MultidimensionalArray<T> = ReadonlyArray<{
  data: T,
  children?: MultidimensionalArray<T>
}>
