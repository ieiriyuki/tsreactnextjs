const x: unknown = 10
const y: unknown = 'AAA'

// console.log(x.toFixed(2)) // Error
// console.logg(y.tolowerCase()) // Error

// accessible under type safe situation
if (typeof x === 'number') {
  console.log(x.toFixed(2))
}

if (typeof y === 'string') {
  console.log(y.toLowerCase())
}
