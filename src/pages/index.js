import react from "react"
import Link from 'next/link'
import Nav from '../components/nav'

const Page = ({ content: { title } }) => {

  return (
    <div>
      <Nav />
      <h1> { title } </h1>
      <Link href="notes">
        <a>Go to notes</a>
      </Link>
    </div>
  )
}

export default Page;

export async function getStaticProps() {

  return {
    props: {
      content: {
        title: 'This is my nice app'
      }
    }
  }
}