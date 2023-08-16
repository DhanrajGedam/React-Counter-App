import { useState } from 'react';

export default function Counter() {


  const [count, setCount] = useState(0);
  const clickIncrement = ()=>{
    setCount(count+1);
  }

  const clickDecrement = ()=>{
    setCount(count-1);
  }
  return (
    <div className='first'>
        <div className="main">
            <h1>{count}</h1>
        </div>
        
        <div className='second'>
            <button className="btn btn-primanry " onClick={clickDecrement}>Decrement</button>
            <button className="btn btn-primanry " onClick={clickIncrement}>Increment</button>
        </div>

    </div>
      
    
  );
}

