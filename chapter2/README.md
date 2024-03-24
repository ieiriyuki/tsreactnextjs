# Fundamentals of TypeScript

## compile

- `tsc --strictNullChecks sayHello.ts`
- open `index.html`

## array

```typescript
const array: string[] = []

const array: Array<string>

const mixedArrayU: (string|number)[]
const mixedArrayT: [string, number]
```

## object

```typescript
let foo: { name: string; age: number } = {
    name: 'John',
    age: 11
}

let optional: { name: string, alias?: string }
```

## any

`let user: any = 'foo'`

## arrow function

`let sayHello = (name: string) => `Hello ${name}`

## type of function

```typescript
function singBirds(birdInfo: (x: string) => string[]): string {
    return birdInfo('hato, kiji')[0] + 'piyo piyo'
}
```

## type inference

```typescript
const names = ['takua', 'yoshiki', 'zento']
names.forEach(name) => {
    console.log(name.toUppercase())
}

// compile error for type
window.confirm = () => {
    console.log('hello')
}
```

## type assertion

- `variable = value as type`
- `const result = (resnponse as any) as User`: 2 step

## type alias

```typescript
// type Name = type
type Point = {
    x: number;
    y: number;
}

type Formatter = (a: string) => string
function printName(firstName: string, formatter: Formatter) {
    console.log(formatter(firstName))
}

// index type
// { [] : type }
type Label = {
    [key: string] : string
}
```

## interface

```typescript
interface name {
    property: type;
}
```

## class

```typescript
class Name {
    value: type;
}

// access modifiers
class Sample {
    public x: number; // default
    private y: number;
    protected z: number;
}
```

## enum

```typescript
// values are 0, 1, 2, 3 by default
enum Direction {
    Up,
    Down,
    Left,
    Right
}

enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}
```

`union` type is also available

## generic

see `generic.ts`

## union / intersection

```typescript
type Id = number | string
function printId(id: Id) {
    return id
}
```

see `intersection.ts`

## literal

`let variable : 'data1' | 'data2' | 'data3'`

## never

```typescript
function compare(a: string, b: string): never {
    throw new Error('message')
}
```

## optional chaining

```typescript
interface User {
    name: string
    social?: {
        facebook: boolean
        twitter: boolean
    }
}

let user: User
user = { name: 'takuya' }
console.log(user.social?.facebook)
```

## non-null assertion operator

error may happen at runtime

```typescript
function processUser(user?: User) {
    let s = user!.name
}
```

## type guard

see `typeguard.ts`
