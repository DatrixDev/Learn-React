import LayoutDefalt from "../layout/LayoutDefault";
import Dashboard from "../pages/Dashboard";
import BookRoom from "../pages/BookRoom";
import CreateRoom from "../pages/CreateRoom";
import ListRoom from "../pages/ListRoom";

export const routes = [
  {
    path: "/",
    element: <LayoutDefalt />,
    children: [
      {
        path: "/",      
        element: <Dashboard />,
      },
      {
        path: "book-room", 
        element: <BookRoom />,
      },
       {
        path: "create-room", 
        element: <CreateRoom />,
      },
      {
        path: "list-room", 
        element: <ListRoom />,
      }
    ],
  },
];
