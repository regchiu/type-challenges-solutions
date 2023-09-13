// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>
]

// ============= Your Code Here =============
// Can not resolve 1234567891011
// type GreaterThan<T extends number, U extends number, Count extends 1[] = []> =
// Count['length'] extends T ? false : Count['length'] extends U ? true : GreaterThan<T, U, [...Count, 1]>

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type StringLengthCompare<
  A extends string,
  B extends string
> = A extends `${Digit}${infer AR}`
  ? B extends `${Digit}${infer BR}`
    ? StringLengthCompare<AR, BR>
    : 1
  : B extends `${Digit}${string}`
  ? -1
  : 0

type DigitCompare<A extends Digit, B extends Digit> = A extends B
  ? 0
  : A extends '0'
  ? -1
  : A extends '1'
  ? B extends '0'
    ? 1
    : -1
  : A extends '2'
  ? B extends '0' | '1'
    ? 1
    : -1
  : A extends '3'
  ? B extends '0' | '1' | '2'
    ? 1
    : -1
  : A extends '4'
  ? B extends '0' | '1' | '2' | '3'
    ? 1
    : -1
  : A extends '5'
  ? B extends '9' | '8' | '7' | '6'
    ? -1
    : 1
  : A extends '6'
  ? B extends '9' | '8' | '7'
    ? -1
    : 1
  : A extends '7'
  ? B extends '9' | '8'
    ? -1
    : 1
  : A extends '8'
  ? B extends '9'
    ? -1
    : 1
  : A extends '9'
  ? 1
  : 1

type SameLengthCompare<
  A extends string,
  B extends string
> = A extends `${infer D1}${infer R1}`
  ? B extends `${infer D2}${infer R2}`
    ? DigitCompare<D1 & Digit, D2 & Digit> extends infer R
      ? R extends 0
        ? SameLengthCompare<R1, R2>
        : R
      : never
    : 0
  : 0

type GreaterThanHelper<
  A extends string,
  B extends string,
  StrComp = StringLengthCompare<A, B>,
  SameComp = SameLengthCompare<A, B>
> = StrComp extends 0 ? SameComp : StrComp

type GreaterThan<A extends number, B extends number> = GreaterThanHelper<
  `${A}`,
  `${B}`
> extends 1
  ? true
  : false
