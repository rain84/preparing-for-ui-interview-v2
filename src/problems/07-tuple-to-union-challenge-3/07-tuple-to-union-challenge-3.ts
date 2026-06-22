/**
 * 1.3 Tuple to Union
 *
 * Implement a generic `TupleToUnion<T>` which covers the values of a tuple to its values union.
 *
 * @example
 * type Arr = ['1', '2', '3']
 *
 * type Test = TupleToUnion<Arr> // '1' | '2' | '3'
 */

import type { Equal, Expect } from '@course/types'

/* _____________ Your Code Here _____________ */

type TupleToUnion<T extends readonly unknown[]> = T[number]
type TupleToUnion2<T extends readonly unknown[]> = T extends [
	infer U,
	...infer V,
]
	? U | TupleToUnion2<V>
	: never
/* _____________ Test Cases _____________ */

type _cases = [
	Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
	Expect<Equal<TupleToUnion<[123]>, 123>>,
	Expect<Equal<TupleToUnion2<[123, '456', true]>, 123 | '456' | true>>,
	Expect<Equal<TupleToUnion2<[123]>, 123>>,
]
