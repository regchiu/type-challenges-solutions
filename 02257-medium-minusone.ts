// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>
]

// ============= Your Code Here =============
// Can not resolve 9_007_199_254_740_992
// type Increasement<T extends unknown[]> = [...T, T['length']]
// type Times<N extends number, Acc extends unknown[] = []> = 1 extends 0
//   ? never
//   : Acc['length'] extends N
//   ? Acc
//   : Times<N, Increasement<Acc>>
// type Pop<T extends unknown[]> = T extends [...infer A, infer _] ? A : never

// type MinusOne<T extends number, A extends number[] = Times<T>> = T extends 0
//   ? -1
//   : Pop<A>['length']

type OneLess = {
  readonly '9': '8'
  readonly '8': '7'
  readonly '7': '6'
  readonly '6': '5'
  readonly '5': '4'
  readonly '4': '3'
  readonly '3': '2'
  readonly '2': '1'
  readonly '1': '0'
}

type MinusOne<
  T extends number | string,
  Digits extends string[] = [],
  Processed extends string[] = [],
  Rejoined extends string = ''
> = `${T}` extends `${infer First}${infer Remainder}`
  ? // STAGE 1: split the digits
    MinusOne<Remainder, [...Digits, First]>
  : // STAGE 2: process the digits
  Digits extends [...infer OtherDigits extends string[], infer RightMostDigits]
  ? RightMostDigits extends keyof OneLess
    ? // When not 0
      MinusOne<'', [], [...OtherDigits, OneLess[RightMostDigits], ...Processed]>
    : // When 0
      MinusOne<'', OtherDigits, ['9', ...Processed]>
  : // STAGE 3: Join digits into a string
  Processed extends [
      infer First extends string,
      ...infer Remainder extends string[]
    ]
  ? MinusOne<'', [], Remainder, `${Rejoined}${First}`>
  : // STAGE 4: Handle edge cases and return result
  Rejoined extends '9'
  ? // When it was 0 turned 9
    -1
  : // When the left most digits is 0
  Rejoined extends `0${infer Answer extends number}`
  ? Answer
  : Rejoined extends `${infer Answer extends number}`
  ? // Convert to number
    Answer
  : never
