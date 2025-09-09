import LayoutDefalt from "../layout/LayoutDefault";
import Cart from "../pages/Cart";
import Home from "../pages/Home";


export const routes = [{
    path: "/",
    element: <LayoutDefalt />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "cart",
            element: <Cart />
        }

    ]
}];
