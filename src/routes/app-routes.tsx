import { Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/app-layout";
import HomeLayout from "../layouts/home-layout";
import BlogDetails from "../components/pages/blog-details";
import BlogListing from "../components/pages/blog-listing";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<p>Welcome</p>} />
        <Route path="about-us" element={<p>About us page</p>} />
        <Route path="faq" element={<p>Faq page</p>} />
        <Route path="blogs" element={<BlogListing />} />
        <Route path="blog/:id" element={<BlogDetails />} />
      </Route>

      <Route path="app" element={<AppLayout />}>
        <Route index element={<p>App dashboard</p>} />
        <Route path="profile" element={<p>Profile</p>} />
        <Route path="settings" element={<p>Settings</p>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
