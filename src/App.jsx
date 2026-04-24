import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
// import List from './components/List'
//npm run dev
function App() {

  return (
    <>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      <Footer />

    </>
  )

}

export default App
