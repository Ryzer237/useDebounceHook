import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function useDebounceValue(value,timeout){
  const[debouncedValue,setDebouncedValue]=useState(0);
  useEffect(()=>{
    let timeOutvalue=setTimeout(()=>{
setDebouncedValue(value);
    },timeout)
    return()=>{
clearTimeout(timeOutvalue);
    }
  },[value])
  return debouncedValue;
}
function App() {
const[value,setValue]=useState(0);
const debounce=useDebounceValue(value,500)

  return (
    <>
      debounced value is {debounce}
      <input type="text" onChange={(e)=>{setValue(e.target.value)}}></input>
    </>
  )
}

export default App
