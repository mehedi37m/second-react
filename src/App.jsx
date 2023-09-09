import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import User from './User'
import Friends from './Friends'

function App() {
 
  function handleClick(){
    alert('button click')
  }

  const addFive = (num) =>{
   alert(num+ 5);
  }

  return (
    <>

 <Friends></Friends>

     <User></User>
     <Counter></Counter>

      <h1>Vite + React</h1>
      <button onClick={handleClick}>click me</button>
      <button onClick={()=>addFive(5)}>pass parameter</button>
      
    </>
  )
}

export default App
