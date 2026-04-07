import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();
  console.log(bookParamsId, "bookParamsId");

  const books = useLoaderData();
  console.log(books, "books");

  const expectedBook = books.find((book) => book.bookId == bookParamsId);
  console.log(expectedBook, "expectedBook");

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;

  return (
    <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-8">
      <figure className="w-full flex items-center justify-center bg-gray-100 rounded-xl">
        <img className="h-100" src={image} alt="Album" />
      </figure>
      <div className="card-body space-y-3 flex-1">
        <h2 className="card-title text-2xl">{bookName}</h2>
        <h2 className="card-title">By: {author}</h2>
        <p className="py-2 border-y">{category}</p>
        <p className="">Review: {review}</p>
        <div className="flex gap-2 items-center">
          {tags.map((tag, ind) => (
            <div key={ind} className="badge badge-success font-bold">
              {tag}
            </div>
          ))}
        </div>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="border-t space-y-3">
          <div className="flex justify-between items-center gap-2">
            <span>Number of Pages:</span> <span>{totalPages}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>Publisher:</span> <span>{publisher}</span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span>Publish time:</span> <span>{yearOfPublishing}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="btn">Read</button>
          <button className="btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
