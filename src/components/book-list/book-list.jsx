import React, { Component } from 'react';
import { connect } from "react-redux";
import { bookAddedToCart, fetchBooks } from "actions/books.action";
import withBookstoreService from "hoc/with-bookstore-service";
import { LoadingIndicator, ErrorIndicator } from "components/indicators";
import BookListItem from "./book-list-item";
import "./book-list.css";


class BookListContainer extends Component {
  componentDidMount() {
    // get async data with server
    this.props.fetchBooks();
  }
  
  render() {
    const { books, loading, error, handleAddedToCart } = this.props;
    
    if (loading) return <LoadingIndicator />;
    if (error) return <ErrorIndicator
      title="Sorry!"
      text="We have lost book data. But soon they will be found"
    />;
  
    return <BookList books={ books } handleAddedToCart={ handleAddedToCart }/>;
  }
}

const BookList = ({ books, handleAddedToCart }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => (
          <li key={ book.isbn13 } className="book-list__card">
            <BookListItem
              book={ book }
              handleAddedToCart={ () => handleAddedToCart(book.isbn13) }
            />
          </li>
        ))
      }
    </ul>
  );
};


const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    handleAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
};


export default withBookstoreService(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);
