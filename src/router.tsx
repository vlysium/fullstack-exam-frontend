import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import { SignupPage, LoginPage } from "./components/auth";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/signup", element: <SignupPage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

export default router;