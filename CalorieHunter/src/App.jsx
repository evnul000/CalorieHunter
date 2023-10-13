import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'
import CalorieCounter from "./pages/CalorieCounter/CalorieCounter"
function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route exact path="/" element={<Homepage/>} />
      <Route path="/CalorieCounter" element={<CalorieCounter/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
