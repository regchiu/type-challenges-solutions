// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<
    Equal<
      Split<'Hi! How are you?', ''>,
      [
        'H',
        'i',
        '!',
        ' ',
        'H',
        'o',
        'w',
        ' ',
        'a',
        'r',
        'e',
        ' ',
        'y',
        'o',
        'u',
        '?'
      ]
    >
  >,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>
]

// ============= Your Code Here =============
type Split<T extends string, U extends string> = string extends T
  ? string[]
  : T extends `${infer Head}${U}${infer Tail}`
  ? [Head, ...Split<Tail, U>]
  : U extends ''
  ? []
  : [T]
