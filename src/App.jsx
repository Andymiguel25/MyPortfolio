import { useState } from 'react'
import './App.css'
import { BrowserRouter ,Routes, Route} from 'react-router-dom'
import Nav from './Component/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Portfolio from './Pages/Portfolio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
  
        <Routes>
            <Route path="/" element={<Nav/>}>
                  <Route index element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/portfolio" element={<Portfolio/>}/>
            </Route>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
