import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from "redux-reducers/shopping-cart/shopping-cart.action";

import './modal-cart-table.style.css';


function splitStr(str) {
  const trimmed = str.trim();
  const sliced = trimmed.slice(0, 30);
  
  if (trimmed.length > sliced.length) {
    return sliced + '...';
  }
  
  return sliced;
}


const ModalCartTableComponent = ({ items, totalCart, handleIncrease, handleDecrease, handleDelete }) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    
    return (
      <tr key={ id }>
        <th scope="row">{ idx + 1 }</th>
        <td title={ title }>{ splitStr(title) }</td>
        <td>{ count }</td>
        <td>${ total }</td>
        <td className="modal__wrap-btn">
          <button
            className="btn btn-outline-danger btn-sm float-right"
            onClick={ () => handleDelete(id) }
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            className="btn btn-outline-success btn-sm float-right"
            onClick={ () => handleIncrease(id) }
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            className="btn btn-outline-warning btn-sm float-right"
            onClick={ () => handleDecrease(id) }
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };
  
  return (
    <div className="modal__content">
      { items.length
        ? <Fragment>
          <table className="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Item</th>
              <th scope="col">Count</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            { items.map(renderRow) }
            </tbody>
          </table>
      
          <div className="modal__total">
            Total: ${ totalCart }
          </div>
        </Fragment>
        : <span className="modal__empty">Your cart is empty</span>
      }
    </div>
  );
};


ModalCartTableComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      count: PropTypes.number,
      total: PropTypes.string
    })
  ),
  totalCart:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  handleIncrease: PropTypes.func,
  handleDecrease: PropTypes.func,
  handleDelete: PropTypes.func
};


const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    totalCart: orderTotal
  };
};

const mapDispatchToProps = {
  handleIncrease: bookAddedToCart,
  handleDecrease: bookRemovedFromCart,
  handleDelete: allBooksRemovedFromCart
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalCartTableComponent);
