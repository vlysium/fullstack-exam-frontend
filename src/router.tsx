import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import { SignupPage, LoginPage } from "./components/auth";
import AppAuthRoutes from "./components/AppAuthRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/products", element: <div>Products</div> },
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