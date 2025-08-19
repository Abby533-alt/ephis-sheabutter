import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Pages/Home"
import Notfound from "./Pages/Notfound"
import ProductsPage from "./Pages/ProductsPage"
import Productdetailspage from "./Pages/Productdetailspage"
import { Theme } from "@radix-ui/themes"
import AboutUs from "./Components/AboutUs"
import ContactUs from "./Pages/ContactUs"
import Blog from "./Pages/Blog"


const ephisSheaButterRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '*', element: <Notfound /> },
  { path: "/productspage", element: <ProductsPage /> },
  {path: "/contactus", element: <ContactUs />},
  {path: "/aboutus", element: <AboutUs />},
  {path: "/blog", element: <Blog />}
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



