import React from 'react'
import Gallery from './components/gallery/Gallery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './pages/Signin'
import Contacts from './pages/Contacts'

function App() {
  // console.log(process.env.REACT_APP_API_KEY)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts/:token" element={<Contacts />} />
      </Routes>
    </Router>
  )
}

export default App;
