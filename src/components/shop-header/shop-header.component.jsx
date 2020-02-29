import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { toggleCartHidden } from "redux-reducers/shopping-cart/shopping-cart.action";

import './shop-header.style.css';


const ShopHeaderComponent = ({ orderTotal, orderQuantity, handleClick }) => {
  return (
    <header
      className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <a className="header-shop__logo mr-md-auto" href="/">Itbook store</a>
      <span className="header-shop__cart" onClick={ handleClick }>
        <i className="header-shop__cart-icon fa fa-shopping-cart" />
        { orderQuantity } items ${ orderTotal }
      </span>
    </header>
  );
};


ShopHeaderComponent.propTypes = {
  orderTotal:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  orderQuantity: PropTypes.number,
  handleClick: PropTypes.func
};



const mapStateToProps = ({ shoppingCart: { orderTotal, orderQuantity } }) => {
  return { orderTotal, orderQuantity };
};

const mapDispatchToProps = {
  handleClick: toggleCartHidden
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopHeaderComponent)
