import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const BooksCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 shadow-sm"
    >
      <figure className="p-6">
        <img className="rounded-xl h-65" src={book.image} alt={book.bookName} />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-center">
          {book.tags.map((tag ,ind) => (
            <div key={ind} className="badge badge-success font-bold">{tag}</div>
          ))}
        </div>

        <h2 className="card-title font-bold text-2xl"> {book.bookName}</h2>
        <p className="font=semibold text-lg">{book.author}</p>

        <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
          <div className=" font-semibold">{book.category}</div>
          <div className="flex gap-2 items-center">
            {book.rating} <CiStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BooksCard;
