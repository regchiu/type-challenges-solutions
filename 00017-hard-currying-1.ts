// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying(
  (
    a: string,
    b: number,
    c: boolean,
    d: boolean,
    e: boolean,
    f: string,
    g: boolean
  ) => true
)
const curried3 = Currying(() => true)

type cases = [
  Expect<
    Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>
  >,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string
      ) => (
        b: number
      ) => (
        c: boolean
      ) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >,
  Expect<Equal<typeof curried3, () => true>>
]

// ============= Your Code Here =============
type Curry<Args extends unknown[], R> = Args extends [infer Head, ...infer Tail]
  ? (a: Head) => Curry<Tail, R>
  : R

declare function Currying<Fn extends Function>(
  fn: Fn
): Fn extends (...args: infer Args) => infer R
  ? Args extends []
    ? () => R
    : Curry<Args, R>
  : never
