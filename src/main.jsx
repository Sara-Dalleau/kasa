// StrictMode permet d'activer des vérifications supplémentaires en développement
// Il aide à détecter des problèmes potentiels (mais n'affecte pas la production)
import { StrictMode } from 'react'

// createRoot permet de créer le point d'entrée React (React 18)
import { createRoot } from 'react-dom/client'

// Style global de l'application
import './index.css'

// Composant principal de l'application
import App from './App.jsx'

// On sélectionne la div root dans le fichier index.html
// Puis on monte l'application React à l'intérieur
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)