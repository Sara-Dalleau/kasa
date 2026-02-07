import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Housing from './pages/Housing/Housing.jsx'
import Error from './pages/Error/Error.jsx'


      
function App() {

  return (
    <>
  <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="/*" element={<Error />} />
      </Routes>
  </Router>
    </>
  )
}

export default App