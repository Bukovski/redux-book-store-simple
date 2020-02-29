import React from 'react';
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux-reducers/shopping-cart/shopping-cart.action";

import ModalComponent from "components/modal/modal.component";
import BookList from "components/book-list/book-list.component";
import ShopHeader from "components/shop-header/shop-header.component";
import ModalCartTable from "components/modal-cart-table/modal-cart-table.component";

import './app.style.css';


function AppComponent ({ hiddenCart, handleClick }) {
  return (
      <main role="main" className="container">
        <ShopHeader />
  
        <BookList />
        
        <ModalComponent show={ hiddenCart } handleClose={ handleClick }>
          <ModalCartTable />
        </ModalComponent>
      </main>
  );
}


const mapStateToProps = ({ shoppingCart: { hiddenCart } }) => {
  return { hiddenCart };
};

const mapDispatchToProps = {
  handleClick: toggleCartHidden
};


export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)
