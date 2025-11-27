import React, { Suspense } from 'react'

const AdminDashboard = () => {
  return (
    <div>
      <header>
        admin header and sidebar
      </header>
      <Suspense fallback={<div>this is loading for Suspense and streaming</div>}>
        <div>
          admin dashboard
        </div>
      </Suspense>
    </div>
  )
}

export default AdminDashboard
