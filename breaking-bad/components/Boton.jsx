import Link from 'next/link'
import {botonStyle} from './Styles'
const Boton =({dir,text})=>(
  <>
    <Link href={dir}>
      <a  className='button'>{text}</a>
    </Link>
    <style jsx>{botonStyle}</style>
  </>  
)

export default Boton