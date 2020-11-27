import React, { useState, useContext } from "react"
import { useRouter } from 'next/router'
import UserContext from "../../context/UserContext"
import ErrorNotice from "../../components/misc/ErrorNotice"

export default function Login() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()

  const { setUserData } = useContext(UserContext)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const loginRes = await fetch(`http://localhost:3000/api/user/login`, {
        method: 'POST',
        body:JSON.stringify({
          username,
          password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res =>res.json())

      setUserData({
        token: loginRes.token,
        user: loginRes.user
      })

      localStorage.setItem("auth-token", loginRes.token)
      router.replace("/")
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg)
    }
  }

  return (
    <div className="page">
      <h2>Log in</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} /> 
      )}
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="login-email">Username</label>
        <input
          autocomplete="off"
          id="login-email"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          autocomplete="off"
          id="login-password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Log in" />
      </form>
    </div>
  )
}