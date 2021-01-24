import { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import CssBaseline from '@material-ui/core/CssBaseline'
import Buscador from './components/Buscador'
import Resultados from './components/Resultados'

const RESULTS = gql`
    query primeraQuery($category:[String!],$page:Int!){
      images(category:$category,page:$page){
        webformatURL
        tags
      }
    }
  `

export default function App () {
  const [search, setSearch] = useState([''])

  const { loading, error, data , fetchMore  } = useQuery(RESULTS, {
    variables: { category: search, page:1 }
  })


  const handleSearching = () => {
    const inputValue = document.getElementById('search').value
    setSearch(prev => [...prev, inputValue])
  }

    //error component
  if (error) return <div>{JSON.stringify(error)}</div>

  return (
    <>
      <CssBaseline/>
      <Buscador setSearch={setSearch} search={search}/>
      {loading?<p style={{height:'100vh'}}>Loading...</p>:<Resultados data={data}/>}
    </>
  )
}
