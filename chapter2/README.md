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
