import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CommercialPage from './pages/CommercialPage'
import NaturePage from './pages/NaturePage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<NaturePage />} />
        <Route path="/otherindustries" element={<CommercialPage />} />
      </Routes>
    </>
  )
}

export default App
