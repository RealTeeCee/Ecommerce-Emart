import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./component/Product";
import Layout from "./Layout";
import { About } from "./component/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/products",
        children: [
          {
            path: "",
            element: <Product />,
          },
          {
            path: ":id",
            element: <>Product detail</>,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
