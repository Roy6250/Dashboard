import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="min-h-screen bg-gray-100">
      <Dashboard />
      <h1>Test application</h1>
    </div>
      
    </>
  )
}

export default App
