import logoHeader from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className='header'>
      <img src={logoHeader} alt="logo kasa" />
      <Link to={`/about/`}><p>A propos</p></Link>
      <Link to={`/`}><p>Accueil</p></Link>
    </div>
  )
}

export default Header