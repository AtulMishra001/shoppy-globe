import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header"; 

const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-4 min-h-screen">
        <Suspense
          fallback={
            <div className="text-center mt-10 text-xl">
              Loading ShoppyGlobe...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id", 
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
