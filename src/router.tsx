import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import { SignupPage, LoginPage } from "./components/auth";
import AppAuthRoutes from "./components/AppAuthRoutes";
import { ProductSlugPage, ProductsPage } from "./components/products";


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
        element: <div>Home</div>
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
        element: <div>Basket</div>
      },
      {
        path: "/profile",
        element: <div>Profile</div>
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