// ============= Test Cases =============
import type { ExpectExtends, ExpectFalse, ExpectTrue } from './test-utils'

declare const example: {
  foo: {
    bar: {
      a: string
    }
    baz: {
      b: number
      c: number
    }
  }
}

type cases = [
  ExpectTrue<ExpectExtends<Path<(typeof example)['foo']['bar']>, ['a']>>,
  ExpectTrue<
    ExpectExtends<Path<(typeof example)['foo']['baz']>, ['b'] | ['c']>
  >,
  ExpectTrue<
    ExpectExtends<
      Path<(typeof example)['foo']>,
      ['bar'] | ['baz'] | ['bar', 'a'] | ['baz', 'b'] | ['baz', 'c']
    >
  >,
  ExpectFalse<ExpectExtends<Path<(typeof example)['foo']['bar']>, ['z']>>
]

// ============= Your Code Here =============
type Path<T> = T extends Record<PropertyKey, unknown>
  ? {
      [P in keyof T]: [P, ...Path<T[P]>] | [P]
    }[keyof T]
  : never
