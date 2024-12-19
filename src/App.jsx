import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Layout from "./Components/Layout/Layout";
import Notfound from "./Components/NotFound/Notfound";
import Work from "./Components/Work/Work";

let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "work", element:  <Work /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes}> </RouterProvider>
    </>
  );
}

export default App;
