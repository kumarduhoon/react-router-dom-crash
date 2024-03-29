import React from "react"
import { createBrowserRouter, RouterProvider, Route, Routes, createRoutesFromElements } from "react-router-dom"
import Layout from "./containers/Layout"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import Services from "./pages/Services/Services"
import Signup from "./pages/SignUp/Signup"
import Signin from "./pages/SignUp/Signup"
import ErrorPage from "./pages/Error/error-page"


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "blog",
          element: <Blog />
        },
        {
          path: "services",
          element: <Services />
        },
        {
          path: "sign-up",
          element: <Signup />
        },
        {
          path: "sign-in",
          element: <Signin />
        },
      ]
    }, {
      path: "*",
      element: <ErrorPage />,
    }
  ])

  // this is 2nd way to create a route
  const myrouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='blog' element={<Blog />} />
        <Route path='services' element={<Services />} />
        <Route path='sign-up' element={<Signup />} />
        <Route path='sign-in' element={<Signin />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    )
  )



  return (
    <>
      <RouterProvider router={myrouter} />
    </>
  )
}

export default App
