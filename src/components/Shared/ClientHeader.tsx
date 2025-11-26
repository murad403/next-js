import Link from 'next/link'
import React from 'react'

const ClientHeader = () => {
  return (
    <div>
      <Link href={'/post'}>post</Link>
    </div>
  )
}

export default ClientHeader
