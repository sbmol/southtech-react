// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Personal from './components/Personal'





function App() {
  
  const style = {
    bg:{
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(33,35,42,1) 100%)',
    }
  }


  return (
    <div className="App" style={ style.bg }>
      <Navbar />
      <Header />
      <Personal />
    
      
    </div>
  )
}

export default App
