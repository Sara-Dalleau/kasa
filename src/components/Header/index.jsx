import logoHeader from '../../assets/images/logo.svg'

// NavLink permet de gérer la navigation avec état actif
import { NavLink } from 'react-router-dom'
import './Header.scss'

function Header() {
  // Header visible sur toutes les pages
  // Contient le logo + les liens de navigation

  return (
    <header className="header">
      <img src={logoHeader} alt="logo kasa" />
      <nav>

        {/* NavLink ajoute automatiquement une classe active si la route correspond */}
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header