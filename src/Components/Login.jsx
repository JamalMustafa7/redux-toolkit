import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {login,logout} from "../features/user"
function Login() {
  const color=useSelector((state)=>state.theme.value)
  const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(login({name:"jamal",age:20,email:"muhammedjamalmustafa@gmail.com"}))} style={{color}}>Login</button>
        <button onClick={()=>dispatch(logout())} style={{color}}>Logout</button>
    </div>
  )
}

export default Login