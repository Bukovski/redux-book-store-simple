import React, { Component } from 'react';
import { connect } from "react-redux";
import { booksRequested, booksLoaded, booksError } from "actions/books.action";
import withBookstoreService from "hoc/with-bookstore-service";
import { LoadingIndicator, ErrorIndicator } from "components/indicators";
import BookListItem from "./book-list-item";
import "./book-list.css";


class BookList extends Component {
  componentDidMount() {
    const {
      bookstoreService,
      booksRequested,
      booksLoaded,
      booksError
    } = this.props;
    
    // Load data from server when page loading
    booksRequested();
    
    // get async data with server
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err));
  }
  
  render() {
    const { books, loading, error } = this.props;
    
    
    if (loading) return <LoadingIndicator />;
    if (error) return <ErrorIndicator
      title="Sorry!"
      text="We have lost book data. But soon they will be found"
    />;
    
    return (
      <ul className="book-list">
        {
          books.map((book) => (
            <li key={ book.isbn13 } className="book-list__card">
              <BookListItem book={ book }/>
            </li>
          ))
        }
      </ul>
    );
  }
}


const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = {
  booksRequested,
  booksLoaded,
  booksError
};


export default withBookstoreService(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
