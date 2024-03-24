type Identity = {
    id: number | string
    name: string
}

type Contact = {
    name: string
    email: string
    phone: string
}

type Employee = Identity & Contact

const employee: Employee = {
    id: 1,
    name: 'Alice',
    email: 'alic@example.com',
    phone: '123-456-7890'
}

// compile error
// const anotherEmployee: Employee = {
//     id: '2',
//     name: 'Bob',
//     email: 'bob@example.com'
// }
