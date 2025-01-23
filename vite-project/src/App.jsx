import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);

  function increment(){
    setCount(count +1);
  }
  function decrement(){
    setCount(count -1);
  }

  return (
    <>

      <h1>{count}</h1>
      <button onClick={increment}>
        +1
      </button>
      <button onClick={decrement}>
        -1
      </button>


    </>
  );
}

export default App
