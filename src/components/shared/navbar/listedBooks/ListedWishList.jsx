import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../../../../context/BookProvider";
import BooksCard from "../ui/BooksCard";

const ListedWishList = ({sortingType}) => {
  const { wishlist } = useContext(BookContext);
  console.log(wishlist, "bookContext");

    const [filteredWishList, setFilteredWishList] = useState(wishlist)
  
    useEffect(()=> {
      if(sortingType){
          if(sortingType === "pages") {
              const sortedData = [...wishlist].sort((a,b) =>a.totalPages - b.totalPages)
              
              setFilteredWishList(sortedData);
          }else if(sortingType ==='rating'){
               const sortedData = [...wishlist].sort((a,b) =>a.rating - b.rating)
              console.log(sortedData, "sortedData")
              setFilteredWishList(sortedData);
          }
      }
  
    }, [sortingType, wishlist])
  

  if(filteredWishList.length === 0) {
    return(
        <div className="h-[50vh] bg-gray-200 flex items-center justify-center">
            <h2 className="text-bold text-4xl">No WishList Data Found</h2>
        </div>
    )
  }

  return (
    <div >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredWishList.map((book, ind) => (
          <BooksCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
