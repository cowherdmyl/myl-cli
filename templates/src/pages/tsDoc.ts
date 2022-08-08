/**
 * 1.常规类型约束
 */
let a: number, b: string, c: boolean
const d: Array<string> = ['0', '1'] // string[] / [string, number]
// example
a = 100
a++
b = '100'
b = '200'
c = true
c = false
console.log(a, b, c, d)

/**
 * 2. 枚举
 * 原理：正向映射嵌套反向映射 // const常量枚举 // 常量枚举不能双向查询，编译不会有新代码
 * let User
 * User[User['user1'] = 0] = 'user1'
 * User[User['user2'] = 0] = 'user2'
 */
enum User {
  user1 = 0,
  user2 = 1,
  user3 = 2,
}
// example
const testobj = {
  status: User.user1,
}
console.log(testobj)

/**
 * 3.接口 -> 对象
 */
interface E {
  name: string
  age: number
  oruse?: boolean
  say(name?: string | number): void // 接口的函数类型
}
const e: E = {
  name: 'myl',
  age: 25,
  say(name) {
    console.log(`my name is ${name}`)
  },
}
// example
e.say(12)

/**
 * 4.函数
 */
function f1(name: string): void {
  console.log(`my name is ${name}`)
}
const f2: (name: string) => void = (name: string): void => {
  console.log(`my name is ${name}`)
}
// example
f1('name1')
f2('name2')

/**
 * 5.断言
 */
const g = [1, 2, 3]
const res1 = g.find(i => i > 2) as number // 断言
const res2 = res1 * res1
// example
console.log(res2)

/**
 * 6.泛型
 */
function h<T>(a: T): T[] {
  const user: Array<T> = []
  user.push(a)
  return user
}
// example
h(12)
