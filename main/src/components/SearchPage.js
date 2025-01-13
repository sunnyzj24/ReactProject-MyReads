import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Book from "./Book";
import * as BooksAPI from "../BooksAPI";

const SearchPage = ({ bookShelf, onUpdateStatus }) => {
  const [query, setQuery] = useState("");
  let [searchedBookList, setSearchedBookList] = useState([]);
  const [bookList, setBookList] = useState([]);

  let queryTimeout;

  useEffect(() => {
    setBookList(bookShelf);
  }, [bookShelf]);

  useEffect(() => {
    setSearchedBookList(searchedBookList);
  }, [searchedBookList]);

  const onSearch = async (e) => {
    e.preventDefault();
    clearTimeout(queryTimeout);

    let query = e.target.value;
    setQuery(query);

    if (!query) {
      return setSearchedBookList([]);
    }

    queryTimeout = setTimeout(() => {
      BooksAPI.search(query).then((res) => {
        if (!res) {
          console.log("Bad response from server");
          setSearchedBookList([]);
        } else if (
          res.hasOwnProperty("error") &&
          res.error.toLowerCase().includes("empty query")
        ) {
          setSearchedBookList([]);
        } else if (res.length > 0) {
          res = res.map((book) => {
            let toBeUpdatedBook = bookList.find((i) => i.id === book.id);
            if (toBeUpdatedBook) {
              book.shelf = toBeUpdatedBook.shelf;
            } else {
              book.shelf = "none";
            }
            return book;
          });
          setSearchedBookList(res);
        }
      });
    }, 500);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => onSearch(e)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBookList.length > 0 &&
            searchedBookList.map((book) => {
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
        <div className="search-result-text">
          <span>{searchedBookList.length} books found</span>
        </div>
      </div>
    </div>
  );
};

SearchPage.propTypes = {
  bookShelf: PropTypes.array,
  onUpdateStatus: PropTypes.func.isRequired,
};

export default SearchPage;
