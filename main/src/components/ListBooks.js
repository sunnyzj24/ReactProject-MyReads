import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Shelf from "./Shelf";

const ListBooks = ({ bookShelf, onUpdateStatus }) => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setBookList(bookShelf);
  }, [bookShelf]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <Shelf
              category="currentlyReading"
              shelfBookList={bookList.filter(
                (b) => b.shelf.toLowerCase() === "currentlyreading"
              )}
              onUpdateStatus={(b, s) => onUpdateStatus(b, s)}
            />
            <Shelf
              category="wantToRead"
              shelfBookList={bookList.filter(
                (b) => b.shelf.toLowerCase() === "wanttoread"
              )}
              onUpdateStatus={(b, s) => onUpdateStatus(b, s)}
            />
            <Shelf
              category="Read"
              shelfBookList={bookList.filter(
                (b) => b.shelf.toLowerCase() === "read"
              )}
              onUpdateStatus={(b, s) => onUpdateStatus(b, s)}
            />
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  bookShelf: PropTypes.array.isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
};

export default ListBooks;
