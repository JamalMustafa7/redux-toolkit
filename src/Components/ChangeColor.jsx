import React from 'react'
import { useState } from 'react'
import {changeColor} from "../features/theme"
import { useDispatch } from 'react-redux'
function ChangeColor() {
    const [color,setColor]=useState("")
    const dispatch=useDispatch()
    console.log(color)
  return (
    <div>
        <input type="text" value={color} onChange={(event)=>setColor(event.target.value)}/>
        <button onClick={()=>dispatch(changeColor(color))}>Change Color</button>
    </div>
  )
}

export default ChangeColor