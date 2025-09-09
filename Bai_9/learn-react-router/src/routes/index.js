import { Children } from "react";
import LayoutDefalt from "../layout/LayoutDefault";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
import BlogAll from "../pages/Blog/BlogAll";
import BlogNew from "../pages/Blog/BlogNew";
import BlogDetail from "../pages/Blog/BlogDetail";
import PrivateRoutes from "../components/PrivateRoutes";
import InforUser from "../pages/InforUser";

export const routes = [{
    path: "/",
    element: <LayoutDefalt />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "about",
            element: <About />
        },
        {
            path: "contact",
            element: <Contact />
        },
        {
            path: "blog",
            element: <Blog />,
            children: [
                {
                    index: true,
                    element: <BlogAll />
                },
                {
                    path: "news",
                    element: <BlogNew />
                },
                   {
                    path: ":id",
                    element: <BlogDetail />
                },
                   {
                    path: "blogRelated",
                    element: <BlogDetail />
                }
            ]
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "*",
            element: <Error404 />
        },
         {
            element: <PrivateRoutes />,
            children : [{
                path : "info-user",
                element : <InforUser/>
            }]
        }


    ]
}];

{/* <Routes>
    <Route path='/' element={<LayoutDefalt />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='blog' element={<Blog />}>
            <Route index element={<BlogAll />} />
            <Route path='news' element={<BlogNew />} />
            <Route path='blogRelated' element={<BlogRelated />} />
            <Route path=':id' element={<BlogDetail />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='info-user' element={<InforUser />} />
        <Route element={<PrivateRoutes />}></Route>
    </Route>


    <Route path='*' element={<Error404 />} />
</Routes> */}