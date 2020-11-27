import { useState } from 'react'
import {searchStyle} from './Styles'
const Search = ({ getQuery,getWanted }) => {
  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <div className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onBlur={(e)=>getWanted(e.target.value)}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    <style jsx>{searchStyle}</style>
    </div>
  )
}

export default Search