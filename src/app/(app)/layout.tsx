import Navbar from '@/components/Shared/Navbar';
import React from 'react'

type TProps = {
    children: React.ReactNode;
}

const layout = ({ children }: TProps) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    )
}

export default layout
