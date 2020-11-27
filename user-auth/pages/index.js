import React, { useContext } from "react"
import { useRouter } from 'next/router'
import UserContext from "../context/UserContext"

const getData = async () => {
  const token = localStorage.getItem("auth-token")
  if (token === null) {
    console.log('invalid token')
  }else{
    console.log(token)
    await fetch(`http://localhost:3000/api/user/data`, {
      method: 'POST',
      headers: {
        'x-auth-token':token
      }
    })
    .then(res =>res.json())
    .then(res=>console.log(res))
  }
}

const deleteData = async () => {
  const token = localStorage.getItem("auth-token")
  if (token === null) {
    console.log('invalid token')
  }else{
    console.log(token)
    await fetch(`http://localhost:3000/api/user/delete`, {
      method: 'POST',
      headers: {
        'x-auth-token':token
      }
    })
    .then(res =>res.json())
    .then(res=>console.log(res))
  }
}

export default function Home() {
  const { userData:{user} } = useContext(UserContext)
  const router = useRouter()

  return (
    <div className="page" >
      {user ? (<>
        <h1>Welcome {user.username}</h1>
        <button onClick={getData}>Obtener data.</button>
        <button onClick={deleteData}>Borrar este user.</button>
      </>) : (
        <>
          <h2>You are not logged in</h2>
          <button onClick={()=>router.replace("/login")}>Log in</button>
        </>
      )}
    </div>
  )
}
