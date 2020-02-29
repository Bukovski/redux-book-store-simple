import React from 'react';
import PropTypes from 'prop-types';

import './book-list-item.style.css';


const BookListItem = (props) => {
  const { book: { title, subtitle, price, image }, handleAddedToCart } = props;
  
  return (
    <div className="book-list__item">
      <div className="book-list__img-wrap">
        <img
          className="book-list__img"
          src={ image }
          alt={ title }
        />
      </div>
      <div className="book-list__detail">
        <div className="book-list__content">
          <h3 className="book-list__title">{ title }</h3>
          <p className="book-list__text">{ subtitle }</p>
          <span className="book-list__price">{ price }</span>
        </div>
        <button
          onClick={ handleAddedToCart}
          className="book-list__to-cart btn btn-info"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};


BookListItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    isbn13: PropTypes.string,
    price: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string
  }),
  handleAddedToCart: PropTypes.func
};


export default BookListItem;
