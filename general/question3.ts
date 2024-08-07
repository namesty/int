interface TypeA {
  foo: number
}

interface TypeB {
  bar: string
}

const myFunction = (arg: TypeA | TypeB): number => {
  // If arg is of TypeA, return arg.foo
  // If arg is of TypeB, return Number(arg.bar)
}