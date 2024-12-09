// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Footer from './components/shared/Footer'
// import Navbar from './components/shared/Navbar'
import { Home } from 'lucide-react'
import Singup from './components/auth/Singup'
import Login from './components/auth/Login'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/',
    element:<Singup/>
  },
])

function App() {

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
