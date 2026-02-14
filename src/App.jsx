import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Housing from './pages/Housing/Housing.jsx'
import Error from './pages/Error/Error.jsx'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'

      
function App() {

  return (
    <div className="app">
    <>
  <Router>
    <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="*" element={<Error />} />
      </Routes>
    <Footer />
  </Router>
    </>
    </div>
  )
}

export default App