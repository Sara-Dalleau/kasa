import logoHeader from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <img src={logoHeader} alt="logo kasa" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
