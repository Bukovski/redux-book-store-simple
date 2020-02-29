import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

import { bookAddedToCart } from "redux-reducers/shopping-cart/shopping-cart.action";
import { fetchBooks } from "redux-reducers/book-list/book-list.action";
import withBookstoreServiceComponent from "hoc/with-bookstore-service.component";

import LoadingIndicator from "components/indicator-loading/loading-indicator.component";
import ErrorIndicator from "components/indicator-error/error-indicator.component";
import BookListItem from "components/book-list-item/book-list-item.component";

import "./book-list.style.css";


class BookList extends Component {
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
  
    return <BookListComponent books={ books } handleAddedToCart={ handleAddedToCart }/>;
  }
}

const BookListComponent = ({ books, handleAddedToCart }) => {
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


const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    handleAddedToCart: bookAddedToCart
  }, dispatch);
};


export default compose(
  withBookstoreServiceComponent,
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
