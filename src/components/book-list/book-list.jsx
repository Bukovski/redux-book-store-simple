import React, { Component } from 'react';
import { connect } from "react-redux";
import { booksLoaded } from "actions/books.action";
import withBookstoreService from "hoc/with-bookstore-service";
import BookListItem from "./book-list-item";
import "./book-list.css";


class BookList extends Component {
  componentDidMount() {
    // Load data from server when page loading
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    
    this.props.booksLoaded(data);
  }
  
  render() {
    const { books } = this.props;
    
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


const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded
};


export default withBookstoreService(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
