// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>
]

// ============= Your Code Here =============
type BinaryToDecimal<
  S extends string,
  Count extends '🐔'[] = []
> = S extends `${infer Head}${infer Tail}`
  ? Head extends '0'
    ? BinaryToDecimal<Tail, [...Count, ...Count]>
    : BinaryToDecimal<Tail, [...Count, ...Count, '🐔']>
  : Count['length']

type Test = BinaryToDecimal<'10'>
