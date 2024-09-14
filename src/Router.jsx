import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Events from "./components/Events";
import Workshops from "./components/Workshops";
function PageRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Events",
      element: <Events />,
    },
    {
      path: "/Workshops",
      element: <Workshops />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
export default PageRouter;
