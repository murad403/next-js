"use client";

import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    return (
        <div>
            <h1>Count {counter}</h1>
            <button onClick={() => setCounter(counter + 1)} className='py-2 px-3 bg-green-500'>Increase</button>
            <button onClick={() => setCounter(counter - 1)} className='py-2 px-3 bg-red-500'>Decrease</button>
        </div>
    )
}

export default Counter
