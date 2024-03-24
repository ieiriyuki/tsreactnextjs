type USer = {
  info?: {
    name: string
    age: number
  }
}

let response = {}
const user = response as any as USer

if (user.info) {
  // type is inferred
  console.log(user.info.name)
}
