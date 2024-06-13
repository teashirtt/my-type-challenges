import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<
    Equal<
      Camelize<{
        some_prop: string
        prop: { another_prop: string }
        array: [
          { snake_case: string },
          { another_element: { yet_another_prop: string } },
          { yet_another_element: string },
        ]
      }>,
      {
        someProp: string
        prop: { anotherProp: string }
        array: [
          { snakeCase: string },
          { anotherElement: { yetAnotherProp: string } },
          { yetAnotherElement: string },
        ]
      }
    >
  >,
  Expect<
    Equal<
      Camelize<{
        array_case: [
          string,
          {
            foo_bar: string
            snake_case: [{ yet_another_prop: number }, boolean]
          },
          number,
        ]
      }>,
      {
        arrayCase: [
          string,
          {
            fooBar: string
            snakeCase: [{ yetAnotherProp: number }, boolean]
          },
          number,
        ]
      }
    >
  >,
]
