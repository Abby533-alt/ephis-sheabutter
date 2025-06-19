import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Pages/Home"
import Notfound from "./Pages/Notfound"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { Theme } from "@radix-ui/themes"

const bigailLuxeRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '*', element: <Notfound /> },
  { path: "/Navbar", element: <Navbar /> },
  {path: "/Footer", element: <Footer/>}
])
export default function App() {

  return (
    <>
      <Theme>
        <RouterProvider router={bigailLuxeRouter} />
      </Theme>
    </>
  )
}



