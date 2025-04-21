
import { useState } from "react";

const Counter = () =>{

    const [currVal , setVal] = useState(() => Math.floor(Math.random() * 16));
     
    const incrBy3 = () => {
           setVal((prev) => prev + 3)
          
    }

    return(
         <div className="counter">
          <div className="textbox"><span>{currVal}</span></div>
           <button onClick={incrBy3}>Increase By 3</button>
         </div>
    )
}

export default Counter