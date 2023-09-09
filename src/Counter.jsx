import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count +1;
        setCount(newCount);
    }

  const handleMin =() => {
    const newCount = count - 1;
    setCount(newCount);
  }

const countStyle = {
   border: '1px solid black',
   margin: '15px',
   padding: '10px',
   borderRadius: '10px',
   backgroundColor: 'pink'
}

  return (
    <div style={countStyle}>
       <h3>counter : {count}</h3>
       <button onClick={handleAdd}>add</button>
       <button onClick={handleMin}>min</button>
    </div>
  )
}

export default Counter
