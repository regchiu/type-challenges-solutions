// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<DropString<'butter fly!', ''>, 'butter fly!'>>,
  Expect<Equal<DropString<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<'butter fly!', 'but'>, 'er fly!'>>,
  Expect<
    Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>
  >,
  Expect<Equal<DropString<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<
    Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>
  >,
  Expect<
    Equal<DropString<' b u t t e r f l y ! ', 'tub'>, '     e r f l y ! '>
  >,
  Expect<
    Equal<DropString<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>
  >,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>
]

// ============= Your Code Here =============
type DropChar<
  T extends string,
  U extends string
> = T extends `${infer Head}${U}${infer Tail}`
  ? DropChar<`${Head}${Tail}`, U>
  : T

type DropString<
  T extends string,
  U extends string
> = U extends `${infer Head}${infer Tail}`
  ? DropString<DropChar<T, Head>, Tail>
  : T

type Test = DropString<'b u t t e r f l y ! ', 'bu'>
