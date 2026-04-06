import React, { use } from "react";

import BooksCard from "../ui/BooksCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books);
  return (
    <div className="my-12 container mx-auto">
      <h2 className="font-bold text-3xl text-center mb-8">Books</h2>

     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
         {books.map((book) => {
        return (
         <BooksCard book={book}/>
        );
      })}
     </div>
    </div>
  );
};

export default AllBooks;
