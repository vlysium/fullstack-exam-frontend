import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer, Slide, ToastContainerProps } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./styles.scss";
import router from "./router.tsx";

const queryClient = new QueryClient();

const toastOptions: ToastContainerProps = {
  position: "top-center",
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  limit: 3,
  pauseOnFocusLoss: false,
  transition: Slide,
};


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer {...toastOptions} />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </React.StrictMode>
)
