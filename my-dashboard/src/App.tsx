import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,Routes,Router,Navigate, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import HomePage from './pages/HomePage'


interface RouteType{

  path:string
  element:React.FC
}

const router:RouteType[]=[{
  path:'/',
  element:HomePage
},

{
  path:'/dash',
  element:Dashboard
}
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="min-h-screen bg-gray-100">
     {/* <h1>Home Page</h1>
      <p>Welcome to the Dashboard</p>
      <Dashboard /> */}

      <BrowserRouter>
      <Routes>
        {router.map((route,index)=>(
          <Route key={index} path={route.path} element={<route.element/>}/>
        ))}
      </Routes>
      </BrowserRouter>
     
    </div>
      
    </>
  )
}

export default App
