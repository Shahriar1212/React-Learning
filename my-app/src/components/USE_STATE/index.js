import React, { useState } from "react"

export default function USE_STATE(){

    const [count,setCount] = useState(0);

    let handleIncrement = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}