interface Obj {
  name: string
  age: number
  job?: string
  say(name: string): void
}
const obj: Obj = {
  name: 'myl',
  age: 24,
  say(name) {
    console.log(`my name is ${name}`)
  },
}
console.log(obj)

function f1(name: string): void {
  console.log(`my name is ${name}`)
}
f1('zhangsan')

const f2: (name: string) => void = (name: string): void => {
  console.log(`my name is ${name}`)
}
f2('lisi')

export {}
