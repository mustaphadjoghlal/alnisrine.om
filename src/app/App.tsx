import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./shared/Layout";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminPage } from "./pages/AdminPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AccountantPage } from "./pages/AccountantPage";
import { OurColorsPage } from "./pages/OurColorsPage";
import { initTheme, applyTheme, DEFAULT_THEME } from "./hooks/useTheme";
import { subscribeToThemeColors } from "../lib/firestore";

initTheme();

const router = createBrowserRouter([
  { path: "/admin", Component: AdminPage },
  { path: "/accountant", Component: AccountantPage },
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
      { path: "our-colors", Component: OurColorsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    const unsub = subscribeToThemeColors((colors) => {
      if (colors) {
        applyTheme({ ...DEFAULT_THEME, ...colors } as typeof DEFAULT_THEME);
        localStorage.setItem("alnisrine-theme", JSON.stringify(colors));
      }
    });
    return unsub;
  }, []);

  return <RouterProvider router={router} />;
}
