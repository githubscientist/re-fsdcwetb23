import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";
import Home from "./pages/Home";
import Register from "./components/Register";
import HomeWrapper from "./wrappers/HomeWrapper";
import Dashboard from "./pages/Dashboard";

const routes = [
  {
    path: "/",
    element: <HomeWrapper />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard />
  }
];

// 1. Create a router object.
const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const App = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  )
}

export default App;