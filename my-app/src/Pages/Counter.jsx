import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const [input , setInput ] = React.useState('')
   
    
 function handelText(e){
    let v = e.target.value ; 
    console.log(v)
      setInput(v)
     
 }

     function increment() {
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
     }
     function decrement() {
        if(count  <= 0 ) return ;
        setCount((prevCount) => prevCount - 1);
        setCount((prevCount) => prevCount - 1);
        setCount((prevCount) => prevCount - 1);

     }
  return (
    <div >
      <h1>You clicked {count} times</h1>
      <button onClick={increment}>
        Increment me
      </button>
      <button onClick={decrement}>
         Decrement me 
        </button>
    <br /> 
    <input type="text" 
    value={input}
    onChange={handelText}
    />
    <h1>{input}</h1>
    </div>
  )
}

export default Counter