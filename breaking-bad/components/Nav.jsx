import Boton from './Boton.jsx'

const Nav = ({nav}) => {
  return (
    <div className='buttonWrapper'>
      {nav.map((item,index)=><Boton key={index}text={item.text} dir={item.dir}/>)}
    </div>
  )
}

export default Nav
