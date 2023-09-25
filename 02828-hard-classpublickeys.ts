// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

class A {
  public str: string
  protected num: number
  private bool: boolean
  constructor() {
    this.str = 'naive'
    this.num = 19260917
    this.bool = true
  }

  getNum() {
    return Math.random()
  }
}

type cases = [Expect<Equal<ClassPublicKeys<A>, 'str' | 'getNum'>>]

// ============= Your Code Here =============
// In Typescript, when you wrote a class A,
// you defined two types in its type system.
// 1. `A` is the type of the instance of class A.
// 2. `type of A` is the type of the class object say `class A`.
// So any instance of class A is just an object, keyof keyword returns its public fields.
type ClassPublicKeys<T> = keyof T
