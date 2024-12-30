import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Book from "./Book";

const Shelf = ({ category, shelfBookList, onUpdateStatus }) => {
  const [bookList, setBookList] = useState([]);

  const dict = {
    currentlyReading: "Currently Reading",
    wantToRead: "Want to Read",
    Read: "Read",
  };

  useEffect(() => {
    setBookList(shelfBookList);
  }, [shelfBookList]);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{dict[category]}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookList.length > 0 &&
            bookList.map((book) => {
              return (
                <li key={book.id}>
                  <Book
                    book={book}
                    onUpdateBookStatus={(book, shelf) =>
                      onUpdateStatus(book, shelf)
                    }
                  />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

Shelf.propType = {
  category: PropTypes.string.isRequired,
  shelfBookList: PropTypes.array,
  onUpdateBookStatus: PropTypes.func.isRequired,
};

export default Shelf;
