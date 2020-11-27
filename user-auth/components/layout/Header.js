import React from "react"
import { useRouter } from 'next/router'
import AuthOptions from "../auth/AuthOptions"

export default function Header() {
	const router = useRouter()
  return (
    <header id="header">
      <button onClick={()=>router.replace("/")}>
        <h1 className="title">MERN auth template</h1>
      </button>
      <AuthOptions />
    </header>
  )
}

  