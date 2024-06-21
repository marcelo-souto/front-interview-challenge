import { Navbar } from "@/components/layout/navbar/navbar";
import { Outlet } from "react-router-dom";

const RestaurantPage = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

export { RestaurantPage };
