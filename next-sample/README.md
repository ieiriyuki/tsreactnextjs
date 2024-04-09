This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Chapter 3 and 4

- next sample in chapter 3
- styled-components in chapter 4

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Link

sample usage of Link

```typescript
import Link from 'next/link'
import { useRouter } from 'next/router'

<Link href="/ssr">
  <a>go to ssr</a>
</Link>

<Link
    href={{
        pathname: '/ssg',
        query: { keyword: 'hello' },
    }}>
    <a>go to ssr</a>
</Link>

<Link href="/ssr">
    <button>Jump to SSG page</button>
</Link>

const router = useRouter()
const onSubmit = () => {
    router.push('/ssr')
    router.push({
        pathname: '/ssg',
        query: { keyword: 'hello' },
    })
}

router.reload()
router.back()
// subscribe events at move start
router.events.on('routeChangeStart', (url, { shallow }) => {
    // url is a path to move to
    // shallow will be true when shallow routing (only path is replaced)
})
// subscribe events at move end
router.events.on('routeChangeComplete', (url, { shallow }) => {
})
```
## Env

below are available

- `.env`
- `.env.local`
- `.env.${name}`
- `.env.${name}.local`
- `*.local` is assumed to be added to `.gitignore`, store api key
