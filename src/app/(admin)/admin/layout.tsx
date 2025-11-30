"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

type TProps = {
    children: React.ReactNode;
}

const ProtectedLayout = ({ children }: TProps) => {
    const router = useRouter();
    // const token = useSelector((state: RootState) => state.auth.token);        //token get from redux
    const token = "asjfaldjfoierie";
    const pathName = usePathname();

    useEffect(() => {
        if (!token) {
            router.replace('/login?redirect=' + encodeURIComponent(pathName));
        }
    }, [token, router]);

    if (!token) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p>লগইন করুন... একটু অপেক্ষা করুন</p>
            </div>
        );
    }

    
    return (
        <div>
            <div>
                <h1 className='text-red-600 '>amin dashboard header</h1>
            </div>
            {children}
        </div>
    )
}

export default ProtectedLayout
