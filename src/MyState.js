import React from 'react'
import { useState } from 'react';
const MyState = () => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                <h2>Increment</h2>
            </button>

        <span>
            <h3>{count}</h3>
            </span>
            <button onClick={() => setCount(count + 1)}>
                <h2>Decrement</h2>
            </button>

        </div>
    )
}
export default MyState
