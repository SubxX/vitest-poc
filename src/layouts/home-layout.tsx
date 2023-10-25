import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const HomeLayout = () => {
  return (
    <div>
      <Sidebar
        items={[
          {
            href: "/",
            label: "Home",
          },
          {
            href: "/about-us",
            label: "About Us",
          },
          {
            href: "/faq",
            label: "Faq",
          },
          {
            href: "/blogs",
            label: "Blogs",
          },
        ]}
      />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
