import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div>
      <Sidebar
        items={[
          {
            href: "/app",
            label: "Dashboard",
          },
          {
            href: "/app/profile",
            label: "Profile",
          },
          {
            href: "/app/settings",
            label: "Settings",
          },
        ]}
      />
      <Outlet />
    </div>
  );
};

export default AppLayout;
