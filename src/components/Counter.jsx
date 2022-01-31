import { useState } from "react"
 const Counter=()=>{
    const [count,setCount]=useState(0);

    const handleIncrement=(val)=>{
      if(count<10)
      setCount(prev=>prev+val)
    }
    const handleDecrement=()=>{
      setCount(prev=>prev-1)
    }
    const handleDouble=()=>{
      setCount(prev=>prev*2)
    }


    return( <div>
        <h1>Counter: {count}</h1>
      <button   disabled={count===0} onClick={handleDecrement}>Decrement</button>

<button onClick={handleIncrement(1)}>Increment</button>

<button onClick={handleDouble}>Double</button>
    </div>
    )
}

export default Counter;
