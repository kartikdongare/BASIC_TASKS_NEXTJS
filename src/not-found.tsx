import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
      <h1>
        Page  not found
      </h1>
      <p>could not find request resource</p>
      <Link href={'/'}><button>Go Back</button></Link>
    </div>
  )
}

export default notFound