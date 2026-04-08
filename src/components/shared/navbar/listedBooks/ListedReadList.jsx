import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../../../context/BookProvider";
import BooksCard from "../ui/BooksCard";

const ListedReadList = ({sortingType}) => {
  const { readList} = useContext(BookContext);
  console.log(readList, "bookContext");

  const [filteredReadList, setFilteredReadList] = useState(readList)

  useEffect(()=> {
    if(sortingType){
        if(sortingType === "pages") {
            const sortedData = [...readList].sort((a,b) =>a.totalPages - b.totalPages)
            console.log(sortedData, "sortedData")
            setFilteredReadList(sortedData);
        }else if(sortingType ==='rating'){
            //
             const sortedData = [...readList].sort((a,b) =>a.rating - b.rating)
            console.log(sortedData, "sortedData")
            setFilteredReadList(sortedData);
        }
    }

  }, [sortingType, readList])

  if(filteredReadList.length === 0) {
    return(
        <div className="h-[50vh] bg-gray-200 flex items-center justify-center">
            <h2 className="text-bold text-4xl">No Read List Data Found</h2>
        </div>
    )
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredReadList.map((book, ind) => (
          <BooksCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
