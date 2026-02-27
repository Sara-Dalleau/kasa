import logoFooter from '../../assets/images/logo-footer.webp'
import './footer.scss'

function Footer () {

  // Footer affiché sur toutes les pages
  // Contient le logo et les informations légales
  
  return (
    <footer className='footer'>
      <img src={logoFooter} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer