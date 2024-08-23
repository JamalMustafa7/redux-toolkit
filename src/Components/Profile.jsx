import React from 'react'
import {useSelector} from "react-redux"
function Profile() {
  const colora=useSelector((state)=>state.theme.value)
  const backgroundColor=useSelector((state)=>state.background.value)
  const user=useSelector(state=>state.user.value)
  return (
    <div style={{color:colora,backgroundColor}}>
        <h1>Profile Page</h1>
        <p>Name: {user.name} </p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile