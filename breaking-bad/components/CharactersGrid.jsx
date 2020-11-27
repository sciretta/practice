import CharacterItem from './CharacterItem.jsx'
import {itemWrapperStyle} from './Styles'
const CharactersGrid = ({items}) => {
  return (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
      <style jsx>{itemWrapperStyle}</style>
    </section>
  )
}

export default CharactersGrid