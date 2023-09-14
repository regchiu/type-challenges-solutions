// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>
]

// ============= Your Code Here =============
type WhiteSpace = ' ' | '\n' | '\t'

type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer Right}`
  ? TrimLeft<Right>
  : S

type TrimRight<S extends string> = S extends `${infer Left}${WhiteSpace}`
  ? TrimRight<Left>
  : S

type Trim<S extends string> = S extends
  | `${WhiteSpace}${infer U}`
  | `${infer U}${WhiteSpace}`
  ? Trim<U>
  : S
