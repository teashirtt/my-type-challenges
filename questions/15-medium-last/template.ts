type Last<T extends any[]> = T extends [...infer _, infer E] ? E : never
