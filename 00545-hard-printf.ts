// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Format<'abc'>, string>>,
  Expect<Equal<Format<'a%sbc'>, (s1: string) => string>>,
  Expect<Equal<Format<'a%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%%dbc'>, string>>,
  Expect<Equal<Format<'a%%%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%dbc%s'>, (d1: number) => (s1: string) => string>>
]

// ============= Your Code Here =============
type Controls = {
  s: [s1: string]
  d: [d1: number]
}

type Format<
  T extends string,
  U = string
> = T extends `${string}%${infer Head}${infer Tail}`
  ? Head extends keyof Controls
    ? Format<
        Tail,
        U extends (...args: infer Args) => infer Result
          ? (...args: Args) => (...args: Controls[Head]) => Result
          : (...args: Controls[Head]) => U
      >
    : Format<Tail, U>
  : U
