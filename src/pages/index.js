import React from "react"
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Nav from '../components/nav'

const Width = dynamic(() => import('../components/browser'), { ssr: false })

const Page = ({ content: { title } }) => {

  return (
    <div>
      <Nav />
      <h1> { title } </h1>
      <Link href="notes">
        <a>Go to notes</a>
      </Link>
      <Width />
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