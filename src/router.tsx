import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import { SignupPage, LoginPage } from "./components/auth";
import AppAuthRoutes from "./components/AppAuthRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <div>Home</div> },
      { path: "/products", element: <div>Products</div> },
      { path: "/basket", element: <div>Basket</div> },
      { path: "/profile", element: <div>Profile</div> },
    ]
  },
  {
    element: <AppAuthRoutes />,
    children: [
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  }
]);

export default router;