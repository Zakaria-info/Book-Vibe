import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import Errorpage from "../pages/errorPage/Errorpage";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage/>,
      },
      {
        path: "/books",
        element: <Books/>,
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: ()=> fetch("/booksData.json"),
      }
    ],
    errorElement: <Errorpage/>
  },
]);
