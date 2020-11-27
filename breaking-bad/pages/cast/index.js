import {useState,useEffect} from 'react'
import Header from '../../components/Header.jsx'
import Search from '../../components/Search.jsx'
import Footer from '../../components/Footer.jsx'
import CharactersGrid from '../../components/CharactersGrid.jsx'
import Global from '../../components/Global'
import Nav from '../../components/Nav.jsx'

let nav = [{text:'Home',dir:'/'}]

const Cast=({initialData})=> {
  const [items, setItems] = useState(initialData)
  //const [nav]=useState([{text:'Home',dir:'/'}])
  const [query, setQuery] = useState('')
  const [wanted,setWanted] = useState('')
  
  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    .then(res=>res.json())
    .then(data=>{
      setItems(data)
    })
  }, [query])

  useEffect(()=>{
    if(wanted.length>=3){
      fetch('/api', {
        method: 'POST', 
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({wanted:wanted})
    })}
  },[wanted])

  return (
    <Global>
      <Header />
      <Search getQuery={(q) => setQuery(q)} getWanted={(w)=>setWanted(w)}/>
      <Nav nav={nav}/>
      <CharactersGrid items={items}/>
      <Footer/>
    </Global>
  ) 
}

export const getServerSideProps=async()=>{
  const initialData=await fetch(`https://www.breakingbadapi.com/api/characters?`)
  .then(res=>res.json())
  return {
    props:{
      initialData
    }
  }
}

export default Cast
