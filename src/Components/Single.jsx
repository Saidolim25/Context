import React, { useState } from 'react'

const Single = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount(count - 1)}>remove</button>
    </div>
  )
}

export default Single