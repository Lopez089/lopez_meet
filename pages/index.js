import Head from 'next/head'
import { Nav } from '../components/nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LopezMeet | Your room video</title>
        <meta name="description" content="Your room video" />
      </Head>
      <main className='bg-blue-50 h-screen ' >
        <Nav />
      </main>
    </div>

  )
} 