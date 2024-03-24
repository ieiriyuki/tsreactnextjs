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
