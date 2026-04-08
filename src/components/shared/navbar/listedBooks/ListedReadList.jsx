import React, { useContext } from "react";
import { BookContext } from "../../../../context/BookProvider";
import BooksCard from "../ui/BooksCard";

const ListedReadList = () => {
  const { storedBooks} = useContext(BookContext);
  console.log(storedBooks, "bookContext");

  if(storedBooks.length === 0) {
    return(
        <div className="h-[50vh] bg-gray-200 flex items-center justify-center">
            <h2 className="text-bold text-4xl">No Read List Data Found</h2>
        </div>
    )
  }

  return (
    <div >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {storedBooks.map((book, ind) => (
          <BooksCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
