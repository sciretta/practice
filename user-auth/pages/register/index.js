import React, { useState, useContext } from "react"
import UserContext from "../../context/UserContext"
import { useRouter } from 'next/router'
import ErrorNotice from "../../components/misc/ErrorNotice"

export default function Register() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [passwordCheck, setPasswordCheck] = useState()
  const [error, setError] = useState()

  const { setUserData } = useContext(UserContext)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetch(`http://localhost:3000/api/user/register`, {
        method: 'POST',
        body:JSON.stringify({
          username,
          password,
          passwordCheck
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res =>res.json())

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
        user: loginRes.user,
      })

      localStorage.setItem("auth-token", loginRes.token)
      router.replace("/")
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg)
    }
  }

  return (
    <div className="page">
      <h2>Register</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="register-email">Username</label>
        <input
          autoComplete="off"
          id="register-email"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          autocomplete="off"
          type="password"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />

        <input type="submit" value="Register" />
      </form>
    </div>
  )
}
