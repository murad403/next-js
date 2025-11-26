import React from 'react'

type TProps = {
    children: React.ReactNode;
}

const layout = ({ children }: TProps) => {
    return (
        <div>
            <div>
                <h1 className='text-red-600 '>amin dashboard header</h1>
            </div>
            {children}
        </div>
    )
}

export default layout
