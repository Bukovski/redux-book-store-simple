import React from 'react';
import './shop-header.css';


const ShopHeader = ({ items, total, handleClick }) => {
  return (
    <header
      className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <a className="header-shop__logo mr-md-auto" href="/#">Itbook store</a>
      <a className="header-shop__cart" href="/#" onClick={ handleClick }>
        <i className="header-shop__cart-icon fa fa-shopping-cart" />
        { items } items ${ total }
      </a>
    </header>
  );
};


export default ShopHeader;
