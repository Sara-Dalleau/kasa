// Import des éléments nécessaires pour gérer le routing
// BrowserRouter permet d'utiliser le système d'URL du navigateur
// Routes contient toutes les routes
// Route définit un chemin + le composant associé
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Import des pages
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Housing from './pages/Housing/Housing.jsx'
import Error from './pages/Error/Error.jsx'

// Import des composants fixes affichés sur toutes les pages
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'

      
function App() {

  return (
    <div className="app">
      {/* Router englobe toute l'application pour activer le système de navigation */}
    <Router>
      {/* Header visible sur toutes les pages */}
      <Header />
        {/* Définition des routes de l'application */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<Error />} />
        </Routes>
      {/* Footer visible sur toutes les pages */}
      <Footer />
    </Router>
    </div>
  )
}

export default App