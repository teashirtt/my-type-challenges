type Unshift<T, U> = T extends [...infer P] ? [U, ...P] : never
