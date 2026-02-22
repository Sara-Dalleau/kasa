import logoFooter from '../../assets/images/logo-footer.svg'
import './footer.scss'

function Footer () {
  return (
    <footer className='footer'>
      <img src={logoFooter} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer