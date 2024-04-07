import { NextPage } from 'next'
import Head from 'next/head'

type SSGProps = {}

const SSG: NextPage<SSGProps> = () => {
  return (
    <div>
      <Head>
        <title>SSG</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>
          This page is generated using <strong>Static Site Generation</strong>.
        </p>
      </main>
    </div>
  )
}

export default SSG
