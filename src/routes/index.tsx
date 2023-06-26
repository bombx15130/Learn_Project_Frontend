import { createBrowserRouter } from "react-router-dom"
import App from '../App'
import ErrorPage from "./error-page"
import LoginPage from "@containers/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "login",
    element: <LoginPage/>
  },
  {
    path: "register",
    element: <ErrorPage/>
  }
]);

export default router