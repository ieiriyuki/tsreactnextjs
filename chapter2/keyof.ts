interface User {
  name: string
  age: number
  email: string
}
type UserKey = keyof User // Userのプロパティ名のunion型

const key1: UserKey = 'name'
// const key2: UserKey = 'phone'  // compile error

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const user: User = {
  name: 'Alice',
  age: 30,
  email: ''
}

const name2 = getProperty(user, 'name')
// const gender = getProperty(user, 'gender') // compile error
