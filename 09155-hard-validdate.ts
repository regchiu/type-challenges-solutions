// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<ValidDate<'0102'>, true>>,
  Expect<Equal<ValidDate<'0131'>, true>>,
  Expect<Equal<ValidDate<'1231'>, true>>,
  Expect<Equal<ValidDate<'0229'>, false>>,
  Expect<Equal<ValidDate<'0100'>, false>>,
  Expect<Equal<ValidDate<'0132'>, false>>,
  Expect<Equal<ValidDate<'1301'>, false>>,
  Expect<Equal<ValidDate<'0123'>, true>>,
  Expect<Equal<ValidDate<'01234'>, false>>,
  Expect<Equal<ValidDate<''>, false>>
]

// ============= Your Code Here =============
type Day = {
  '01': '31'
  '02': '28'
  '03': '31'
  '04': '30'
  '05': '31'
  '06': '30'
  '07': '31'
  '08': '31'
  '09': '30'
  '10': '31'
  '11': '30'
  '12': '31'
}

type Month = keyof Day

type RemoveZero<T> = T extends `0${infer Tail}` ? RemoveZero<Tail> : T

type CheckDay<
  Day extends string,
  DaysThisMonth extends string,
  DayWithoutZero extends string = RemoveZero<Day>,
  Count extends '🐔'[] = []
> = DayWithoutZero extends ''
  ? false
  : `${Count['length']}` extends DayWithoutZero
  ? true
  : `${Count['length']}` extends DaysThisMonth
  ? false
  : CheckDay<Day, DaysThisMonth, DayWithoutZero, [...Count, '🐔']>

type ValidDate<T extends string> =
  T extends `${infer M1}${infer M2}${infer Tail}`
    ? `${M1}${M2}` extends Month
      ? CheckDay<Tail, Day[`${M1}${M2}`]>
      : false
    : false

type Test = ValidDate<'0912'>
