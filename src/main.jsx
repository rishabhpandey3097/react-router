import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/Github";
import { gitInfoLoader } from "./services/githubService";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <AboutUs />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "user/:userId",
//         element: <User />,
//       },
//       {
//         path: "github",
//         element: <Github />,
//         loader: { gitInfoLoader },
//       },
//     ],
//   },
// ]);

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:userId" element={<User />} />
      <Route loader={gitInfoLoader} path="/github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
