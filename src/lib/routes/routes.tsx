import { createBrowserRouter } from "react-router-dom";

import { RestaurantPage } from "@/pages/restaurant-page";

import { MenuPage } from "@/pages/menu-page";
import { ContactPage } from "@/pages/contact-page";
import { LoginPage } from "@/pages/login-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantPage />,
    children: [
      {
        path: "menu",
        element: <MenuPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export { router };
