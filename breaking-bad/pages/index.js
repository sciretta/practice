import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import MostWanted from '../components/MostWanted.jsx'
import Global from '../components/Global'
import Nav from '../components/Nav.jsx'
import { useState } from 'react'

let nav = [{text:'Cast',dir:'/cast'},{text:'Opcion2',dir:'#'}]

const Home = ({items})=> {
  //const [nav]=useState([{text:'Cast',dir:'/cast'},{text:'Opcion2',dir:'#'}])
  return (
    <Global>
      <Header/>
      <MostWanted items={items}/>
      <Nav nav={nav}/>
      <Footer/>
    </Global>
  )
}

export const getServerSideProps=async()=>{
  const res=await fetch(`http://localhost:3000/api`)
  const data=await res.json()
  const querys=await data.map(item=>item.wanted)
  const items=await Promise.all(querys.map(query=>(
    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    .then(res=>res.json())
    .then(data=>{
      if(data[0]===undefined)return false
      return data[0]
    })
  )))
  return {
    props:{
      items
    }
  }
}

export default Home