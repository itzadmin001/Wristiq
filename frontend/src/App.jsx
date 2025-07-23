import { lazy, useContext, useEffect } from "react";
import { AllProducts } from "./Data/Products";
import WebsiteMain from "./Pages/Main"
const Home = lazy(() => import("./Pages/Home"))
const Store = lazy(() => import("./Pages/Store"))
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { SetProduts } from "./Reducers/ProductSlice";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { MainContext } from "./MainContext";
import { lsToState } from "./Reducers/UserSlice";
const MyOrder = lazy(() => import("./Pages/MyOrder"))
const About = lazy(() => import("./Pages/About"))
const Product = lazy(() => import("./Pages/Product"))
const Shipping = lazy(() => import("./Pages/Shipping"))
const WistList = lazy(() => import("./Pages/WistList"))







function App() {
  const products = useSelector(state => state.product.product)
  const dispatch = useDispatch()
  const { SetWistList } = useContext(MainContext)

  useEffect(() => {
    if (products.length === 0) {
      dispatch(SetProduts(AllProducts))
    }
    dispatch(lsToState())
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    SetWistList(storedWishlist);
  }, [])



  const route = createBrowserRouter([
    {
      path: "/",
      element: <WebsiteMain />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "store",
          element: <Store />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "product/:id",
          element: <Product />
        },
        {
          path: "shipping",
          element: <Shipping />
        },
        {
          path: "/my-wistlist",
          element: <WistList />
        },
        {
          path: "/my-order",
          element: <MyOrder />
        }

      ]
    }, {
      path: "/login",
      element: <Login />
    },
    {
      path: "/sign-up",
      element: <SignUp />
    },
    {
      path: "*",
      element: <h1> page not found</h1>
    }
  ])




  return (
    <RouterProvider router={route} />
  )
}

export default App
