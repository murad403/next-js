"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react'

const AdminDashboard = () => {
  const router = useRouter();
  const searchParams = useSearchParams();     
  const redirectTo = searchParams.get("redirect") || "/dashboard";

  const handleLogin = () => {
    router.replace(decodeURIComponent(redirectTo));
  }
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
