import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import { SignupPage, LoginPage } from "./components/auth";
import AppAuthRoutes from "./components/AppAuthRoutes";
import { ProductSlugPage, ProductsPage } from "./components/products";
import { BasketPage } from "./components/basket";
import { UserPage } from "./components/user";
import { OrdersPage } from "./components/order";
import { CheckoutPage } from "./components/checkout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { // redirect "/" to "/products"
        path: "/",
        element: <Navigate to="/products" />
      },
      { 
        path: "/products",
        element: <ProductsPage />
      },
      {
        path: "/product/:slug",
        element: <ProductSlugPage />
      },
      {
        path: "/basket",
        element: <BasketPage />
      },
      {
        path: "/checkout",
        element: <CheckoutPage />
      },
      {
        path: "/orders",
        element: <OrdersPage />
      },
      {
        path: "/user",
        element: <UserPage />
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