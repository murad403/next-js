import React from 'react'

const LoadingPage = () => {
  return (
    <div className="p-8">
      <div className="h-10 bg-gray-200 rounded w-64 mb-8 animate-pulse"></div>

      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white p-6 rounded-lg shadow animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
            <div className="h-32 bg-gray-100 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoadingPage
