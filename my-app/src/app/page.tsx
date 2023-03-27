import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="p-10 font-bold text-red-500 ">hello</div>
    </main>
  )
}
