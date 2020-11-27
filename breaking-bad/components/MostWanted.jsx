import CharactersGrid from './CharactersGrid.jsx'

const MostWanted=({items})=>{
  return(
    <>
      <h1>Mas buscados:</h1>
      <CharactersGrid  items={items} />
    </>   
  )
}

export default MostWanted