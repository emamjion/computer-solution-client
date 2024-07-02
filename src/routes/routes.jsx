import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import AboutPage from "../Pages/About/AboutPage/AboutPage";
import BlogsPage from "../Pages/Blogs/BlogsPage/BlogsPage";
import ContactPage from "../Pages/Contact/ContactPage/ContactPage";
import Home from "../Pages/Home/Home/Home";
import ServicePage from "../Pages/Service/ServicePage/ServicePage";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
            path: '/about',
            element: <AboutPage/>
        },
        {
          path: '/services',
          element: <ServicePage/>
        },
        {
          path: '/blogs',
          element: <BlogsPage/>
        },
        {
          path: '/contact',
          element: <ContactPage/>
        },
      ]
    }
]);

export default router;