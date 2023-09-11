// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>
]

// ============= Your Code Here =============
type ValueOf<T> = T[keyof T]
type ObjectEntries<T> = Exclude<
  ValueOf<{
    [P in keyof T]: [
      P,
      Required<T>[P] extends never ? undefined : Required<T>[P]
    ]
  }>,
  undefined
>
// type ObjectEntries<T> = keyof T extends infer P
//   ? P extends keyof T
//     ? [P, Required<T>[P] extends never ? undefined : Required<T>[P]]
//     : never
//   : never
