import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import SearchPage from "./components/SearchPage";
import ListBooks from "./components/ListBooks";
import * as BookAPI from "./BooksAPI";

const App = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const res = await BookAPI.getAll();
    setBookList(res);
  };

  const onUpdateBookStatus = (book, shelf) => {
    const update = async () => {
      console.log("update book to another shelf");
      await BookAPI.update(book, shelf);
    };
    update().then(() => getAllBooks());
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/search"
            element={
              <SearchPage
                bookShelf={bookList}
                onUpdateStatus={(b, s) => onUpdateBookStatus(b, s)}
              />
            }
          />
          {bookList.length > 0 && (
            <Route
              exact
              path="/"
              element={
                <ListBooks
                  bookShelf={bookList}
                  onUpdateStatus={(b, s) => onUpdateBookStatus(b, s)}
                />
              }
            />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
