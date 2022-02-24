import { useState } from 'react'

export const Counter = () => {
    const [count,setCount] = useState(0);
  return (
    <div className="counter">
        <button type="button" onClick={ ()=> setCount(count+1)} >Increase Count</button>
        <button type="button" onClick={ ()=> setCount(0)} >Reset Count</button>
        <button type="button" onClick={ ()=> setCount(count-1)} >Decrease Count</button>
        <label> { count } </label>
    </div>
  )
};

export default Counter;
