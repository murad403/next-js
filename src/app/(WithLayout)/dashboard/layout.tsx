import Footer from '@/components/Shared/Footer'
import React from 'react'

const DashboradLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <div>
      <div className='min-h-screen'>
        {children}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DashboradLayout
