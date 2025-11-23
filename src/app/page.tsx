import Counter from '@/components/Counter/Counter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page description"
}

const page = () => {
  // console.log("Hello server component")
  return (
    <div>
      <h1 className='text-center text-2xl capitalize'>next js core concept</h1>
      <Counter></Counter>
    </div>
  )
}

export default page
