import react from "react"
import Link from 'next/link'
import Nav from '../components/nav'

const Page = () => {

  return (
    <div>
      <Nav />
      <Link href="notes">
        <a>Go to notes</a>
      </Link>
    </div>
  )
}

export default Page;