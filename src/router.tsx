import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignupPage from "./components/auth/SignupPage";
import LoginPage from "./components/auth/LoginPage";


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