import Batsman from './batsman'
import './App.css'

function App() {

  function handleClick(){
    alert("Clicked 1")
  }

  const handleClick2 =() =>{
    alert("Clicked 2")
  }

  const addedFive = (num) =>{
   const number = num + 5;
    alert(number);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => alert("clicked 3")}>Click me 3</button>
      <button onClick={() => addedFive(5)}>added 5</button>
    </>
  )
}

export default App
