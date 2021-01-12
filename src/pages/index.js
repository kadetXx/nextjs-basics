import react from "react"
import Link from 'next/link'

const Page = () => {

  return (
    <div>
      <h2>Hello World!</h2>
      <Link href="notes">
        <a>Go to notes</a>
      </Link>
    </div>
  )
}

export default Page;