import "./Error.scss"
// Import de Link pour permettre une navigation sans rechargement de page
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      {/* Titre principal affichant le code d'erreur */}
      <h1 className="error-title">404</h1>

      {/* Message explicatif pour l'utilisateur */}
      <p className="error-text">
        Oups! La page que vous demandez n'existe pas.
      </p>

      {/* Link permet de revenir à la page d'accueil sans recharger le navigateur */}
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error