import { createBrowserRouter,RouterProvider } from "react-router"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Notfound from "./Pages/Notfound"

const echoFarmsRouter = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/Login', element: <Login />},
  {path: '*', element: <Notfound />},
])
export default function App() {
  
  return (
    <>
      
    </>
  )
}



