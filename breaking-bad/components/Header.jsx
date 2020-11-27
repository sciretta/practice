import {headerStyle} from './Styles'
const Header = () => {
  return (
    <>
      <header className='center'>
        <img src="/logo.png" alt='' /> 
      </header>
      <style jsx>{headerStyle}</style>
    </>
  )
}

export default Header