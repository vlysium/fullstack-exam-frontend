import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import { SignupPage, LoginPage } from "./components/auth";
import AppAuthRoutes from "./components/AppAuthRoutes";
import { ProductSlugPage, ProductsPage } from "./components/products";
import { BasketPage } from "./components/basket";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { // redirect "/" to "/home"
        path: "/",
        element: <Navigate to="/home" />
      },
      { 
        path: "/home",
        element: <h1>Home</h1>
      },
      { 
        path: "/products",
        element: <ProductsPage />
      },
      {
        path: "/products/:slug",
        element: <ProductSlugPage />
      },
      {
        path: "/basket",
        element: <BasketPage />
      },
      {
        path: "/profile",
        element: <h1>Home</h1>
      },
    ]
  },
  {
    element: <AppAuthRoutes />,
    children: [
      {
        path: "/signup",
        element: <SignupPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
    ],
  }
]);

export default router;