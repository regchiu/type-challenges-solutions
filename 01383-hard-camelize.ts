// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<
    Equal<
      Camelize<{
        some_prop: string
        prop: { another_prop: string }
        array: [
          { snake_case: string },
          { another_element: { yet_another_prop: string } },
          { yet_another_element: string }
        ]
      }>,
      {
        someProp: string
        prop: { anotherProp: string }
        array: [
          { snakeCase: string },
          { anotherElement: { yetAnotherProp: string } },
          { yetAnotherElement: string }
        ]
      }
    >
  >
]

// ============= Your Code Here =============
type CamelizeArray<T> = T extends [infer Head, ...infer Tail]
  ? [Camelize<Head>, ...CamelizeArray<Tail>]
  : T

type CamelizeCase<T> = T extends `${infer Head}_${infer Second}${infer Tail}`
  ? `${Head}${CamelizeCase<`${Uppercase<Second>}${Tail}`>}`
  : T

type Camelize<T> = T extends object
  ? {
      [P in keyof T as CamelizeCase<P>]: T[P] extends unknown[]
        ? CamelizeArray<T[P]>
        : Camelize<T[P]>
    }
  : T

type Test = Camelize<{
  some_prop: string
  prop: { another_prop: string }
  array: [
    { snake_case: string },
    { another_element: { yet_another_prop: string } },
    { yet_another_element: string }
  ]
}>
