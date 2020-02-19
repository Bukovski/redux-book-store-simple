import React from 'react';
import { Modal } from "components/modal";
import { BookList } from "components/book-list";
import ShopHeader from "components/shop-header";
import { ModalCartTable } from "components/modal-cart-table";
import './app.css';


function App () {
  const [ showModal, setShowModal ] = React.useState(false);
  
  const toggleModal = () => setShowModal(!showModal);
  
  return (
      <main role="main" className="container">
        <ShopHeader handleClick={ toggleModal }/>
  
        <BookList />
        
        <Modal show={ showModal } handleClose={ toggleModal }>
          <ModalCartTable />
        </Modal>
      </main>
  );
}


export default App;
