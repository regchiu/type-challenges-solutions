// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Obj = {
  a: number
  b: string
  c: boolean
  obj: {
    d: number
    e: string
    f: boolean
    obj2: {
      g: number
      h: string
      i: boolean
    }
  }
  obj3: {
    j: number
    k: string
    l: boolean
  }
}

type cases = [
  Expect<Equal<DeepPick<Obj, ''>, unknown>>,
  Expect<Equal<DeepPick<Obj, 'a'>, { a: number }>>,
  Expect<Equal<DeepPick<Obj, 'a' | ''>, { a: number } & unknown>>,
  Expect<
    Equal<DeepPick<Obj, 'a' | 'obj.e'>, { a: number } & { obj: { e: string } }>
  >,
  Expect<
    Equal<
      DeepPick<Obj, 'a' | 'obj.e' | 'obj.obj2.i'>,
      { a: number } & { obj: { e: string } } & { obj: { obj2: { i: boolean } } }
    >
  >
]

// ============= Your Code Here =============
type Get<T, Path> = Path extends `${infer Head}.${infer Tail}`
  ? Head extends keyof T
    ? { [P in keyof T as P extends Head ? P : never]: Get<T[Head], Tail> }
    : never
  : Path extends keyof T
  ? { [P in keyof T as P extends Path ? P : never]: T[Path] }
  : never

type UnionToIntersection<T> = (
  T extends T ? (arg: T) => unknown : never
) extends (arg: infer R) => unknown
  ? R
  : never

type DeepPick<T, Path extends string> = UnionToIntersection<Get<T, Path>>
