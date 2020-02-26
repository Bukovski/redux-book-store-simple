import React from 'react';
import { Modal } from "components/modal";
import { BookList } from "components/book-list";
import ShopHeader from "components/shop-header";
import { ModalCartTable } from "components/modal-cart-table";
import './app.css';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux-reducers/shopping-cart/shopping-cart.action";


function App ({ hiddenCart, handleClick }) {
  return (
      <main role="main" className="container">
        <ShopHeader />
  
        <BookList />
        
        <Modal show={ hiddenCart } handleClose={ handleClick }>
          <ModalCartTable />
        </Modal>
      </main>
  );
}


const mapStateToProps = ({ shoppingCart: { hiddenCart } }) => {
  return { hiddenCart };
};

const mapDispatchToProps = {
  handleClick: toggleCartHidden
};


export default connect(mapStateToProps, mapDispatchToProps)(App)
