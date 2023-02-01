import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Color from './components/color'
import List from './components/list'


function App() {


const [div, setDiv] = useState<string[]>([]);



  function saveDiv(newtodo:string) {
    if(newtodo!==" "){
    setDiv((prev) => [...prev, newtodo]);}
   
 console.log(div);
  }

  return (
    <div className="App">
     <Color  div={div} onsaveDive={saveDiv}/>
   <div className='listcontainer'>  <List  items={div}/>
   </div>
    
    </div>
  )
}

export default App
