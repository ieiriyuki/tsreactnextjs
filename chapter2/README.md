# Fundamentals of TypeScript

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

