import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [showNavBar, setShowNavBar] = useState(false)
  
  return (
    <div className='app'>
      <Header showNavBar={showNavBar} setShowNavBar={setShowNavBar} />
      <Main setShowNavBar={setShowNavBar}/>
      <Footer/>
    </div>
  )
}

export default App
