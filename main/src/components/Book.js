import PropTypes from "prop-types";

const Book = ({ book, onUpdateBookStatus }) => {
  const bookImage =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : noCover;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url($(bookImage))`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={book.shelf || "none"}
            onChange={(e) => onUpdateBookStatus(book, e.target.value)}
          >
            <option value="default" disabled>
              Move to...
            </option>
            <option value="none">None</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateBookStatus: PropTypes.func.isRequired,
};

export default Book;
