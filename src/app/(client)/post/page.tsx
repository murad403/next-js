import Link from 'next/link'
import React from 'react'

const page = () => {
    const posts = [1, 2, 3, 4, 5];
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">My Instagram Clone</h1>
      <div className="grid grid-cols-3 gap-6">
        {posts.map((id) => (
          <Link key={id} href={`/post/${id}`}>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 flex items-center justify-center text-2xl">
              Post {id}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page
