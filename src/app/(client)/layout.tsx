import ClientHeader from '@/components/Shared/ClientHeader';
import React from 'react'

type TProps = {
    children: React.ReactNode;
}

const layout = ({ children }: TProps) => {
    return (
        <div>
            <div className='border bg-gray-300'>
                <h1 className='text-red-600 '>Client dashboard header</h1>
                <ClientHeader></ClientHeader>
            </div>
            {children}
        </div>
    )
}

export default layout
