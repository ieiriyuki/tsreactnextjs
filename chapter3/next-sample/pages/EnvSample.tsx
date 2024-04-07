import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

const EnvSample: NextPage = (props) => {
  console.log('process.env.TEST', process.env.TEST)
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

  return (
    <div>
      <Head>
        <title>create next app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* サーバーサイド描画時は表示されるが, クライアントサイド描画では表示されない*/}
        <p>{process.env.TEST}</p>
        {/* クライアントサイドでも表示される */}
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  )
}

// getStaticPropsはサーバーサイドなので, process.env.TESTは表示される
export const getStaticProps: GetStaticProps = async (context) => {
  console.log('process.env.TEST', process.env.TEST)
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)
  return {
    props: {},
  }
}

export default EnvSample
