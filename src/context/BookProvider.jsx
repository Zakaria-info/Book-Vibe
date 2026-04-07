import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  

  const [storedBooks, setStoredBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    console.log(currentBook, "Book");

    const isExist = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExist) {
      toast.error("The book is already exists");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to Read list`)
    }

    
  };
  const handleWishlist = (currentBook) => {
    
    const isExistReadList = storedBooks.find(book => book.bookId === currentBook.bookId)

    if(isExistReadList){
        toast.error("This book in Read list");
        return;
    }

    const isExist = wishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExist) {
      toast.error("The book is already exists");
    } else {
      setWishlist([...wishlist, currentBook]);
      toast.success(`${currentBook.bookName} is added to Wishlist`)
    }

    
  };
  const data = {
    handleMarkAsRead, storedBooks, setStoredBooks, wishlist, setWishlist, handleWishlist
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
