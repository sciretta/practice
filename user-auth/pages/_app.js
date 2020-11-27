import React, { useState, useEffect } from "react"
import UserContext from "../context/UserContext"
import Header from '../components/layout/Header'
import "../style.css"

function MyApp({ Component, pageProps }) {
	const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = localStorage.getItem("auth-token")
      if (token === null) {
        localStorage.setItem("auth-token", "")
        token = ""
      }else{
        const tokenRes = await fetch(`http://localhost:3000/api/user/tokenIsValid`, {
          method: 'POST',
          headers: {
            'x-auth-token':token
          }
        })
        .then(res =>res.json())

        if (tokenRes) {
          const userRes = await fetch(`http://localhost:3000/api/user/data`, {
            method: 'POST',
            headers: {
              'x-auth-token':token
            }
          })
          .then(res =>res.json())
          setUserData({
            token,
            user: userRes
          })
        }
      }
    }

    checkLoggedIn()
  }, [])
  
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Header/>
	    <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
