import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeBackground } from '../features/background'
function ChangeBackground() {
    const [background,setBackground]=useState("")
    const dispatch=useDispatch()
  return (
    <div>
        <input type="text" onChange={(e)=>setBackground(e.target.value)}/>
        <button onClick={()=>dispatch(changeBackground(background))}>Change Background</button>
    </div>
  )
}

export default ChangeBackground