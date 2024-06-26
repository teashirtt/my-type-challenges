type Shift<T extends Array<any>> = T['length'] extends 0
  ? []
  : T extends [infer _, ...infer P]
    ? [...P]
    : never
