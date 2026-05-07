import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./shared/Layout";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminPage } from "./pages/AdminPage";
import { NotFoundPage } from "./pages/NotFoundPage";

const router = createBrowserRouter([
  { path: "/admin", Component: AdminPage },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "interior", Component: CategoryPage },
      { path: "exterior", Component: CategoryPage },
      { path: "materials", Component: CategoryPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
