import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Pages/Home"
import Notfound from "./Pages/Notfound"
import ProductsPage from "./Pages/ProductsPage"
import Productdetailspage from "./Pages/Productdetailspage"
import { Theme } from "@radix-ui/themes"
import SecondAbout from "./Components/SecondAbout"

const ephisSheaButterRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '*', element: <Notfound /> },
  { path: "/productspage", element: <ProductsPage /> },
  {path: "/productdetailspage", element: <Productdetailspage/>},
  {path: "/secondabout", element: <SecondAbout />},
])
export default function App() {

  return (
    <>
      <Theme>
        <RouterProvider router={ephisSheaButterRouter} />
      </Theme>
    </>
  )
}



