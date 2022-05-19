import Head from 'next/head'
import { Nav } from '../components/nav'
import { Hero } from '../components/hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LopezMeet | Your room video</title>
        <meta name="description" content="Your room video" />
      </Head>
      <main className='h-screen'  >
        <Nav />
        <Hero />
      </main>
    </div>

  )
} 