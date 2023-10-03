// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  // Raw string -> encoded string
  Expect<Equal<RLE.Encode<'AAABCCXXXXXXY'>, '3AB2C6XY'>>,

  // Encoded string -> decoded string
  Expect<Equal<RLE.Decode<'3AB2C6XY'>, 'AAABCCXXXXXXY'>>
]

// ============= Your Code Here =============
namespace RLE {
  export type Encode<
    T extends string,
    U extends string = '',
    Counter extends '🐔'[] = []
  > = T extends `${infer Head}${infer Tail}`
    ? Head extends U
      ? Encode<Tail, U, ['🐔', ...Counter]>
      : U extends ''
      ? Encode<Tail, Head, ['🐔']>
      : Counter['length'] extends 1
      ? `${U}${Encode<Tail, Head, ['🐔']>}`
      : `${Counter['length']}${U}${Encode<Tail, Head, ['🐔']>}`
    : U extends ''
    ? ''
    : Counter['length'] extends 1
    ? U
    : `${Counter['length']}${U}`

  type Repeat<
    T extends string,
    U extends string,
    Counter extends '🐔'[] = []
  > = `${Counter['length']}` extends U
    ? ''
    : `${T}${Repeat<T, U, ['🐔', ...Counter]>}`

  export type Decode<
    T extends string,
    U extends string = ''
  > = T extends `${infer Head}${infer Tail}`
    ? Head extends `${number}`
      ? Decode<Tail, `${U}${Head}`>
      : `${Repeat<Head, U extends '' ? '1' : U>}${Decode<Tail, ''>}`
    : ''
}
