import { useState } from "react"

export default function Counter(){ 
    let [counter , counterSet] = useState(0); 
    let f = ()=> counterSet(counter + 1) ; 
    return(
        <>
        <h1>Value {counter}</h1>
        <button onClick={f}>+</button>
        
        </>
    )
}