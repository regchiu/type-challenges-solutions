// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
        c: boolean
      }
    >
  >
]

// ============= Your Code Here =============
// type Merge<F, S> = {
//   [P in keyof F | keyof S]: P extends keyof S
//     ? S[P]
//     : P extends keyof F
//     ? F[P]
//     : never
// }

// type Merge<F, S> = {
//   [P in keyof (F & S)]: P extends keyof S ? S[P] : (F & S)[P]
// }

type Merge<
  F extends Record<PropertyKey, unknown>,
  S extends Record<PropertyKey, unknown>
> = {
  [P in keyof (F & S)]: P extends keyof S ? S[P] : F[P]
}
