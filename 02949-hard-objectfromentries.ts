// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null]

type cases = [Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>]

// ============= Your Code Here =============
type ObjectFromEntries<T extends [PropertyKey, unknown]> = {
  [P in T as P[0]]: P[1]
}

type Test = ObjectFromEntries<ModelEntries>
