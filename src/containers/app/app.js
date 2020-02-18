import React from 'react';
import { Modal } from "components/modal";
import { BookList } from "components/book-list";
import ShopHeader from "components/shop-header";
import './app.css';


function App () {
  const [ showModal, setShowModal ] = React.useState(false);
  
  return (
      <main role="main" className="container">
        <ShopHeader items={ 2 } total={ 250 } handleClick={ () => setShowModal(!showModal) }/>
  
        <BookList />
        
        <Modal show={ showModal } handleClose={ () => setShowModal(!showModal) }>
          <div className="modal__content">
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
              <tr>
                <th scope="row">1</th>
                <td>Site Reliability Engineering</td>
                <td>2</td>
                <td>$40</td>
                <td>
                  <button className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                  </button>
                  <button className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-plus-circle" />
                  </button>
                  <button className="btn btn-outline-warning btn-sm float-right">
                    <i className="fa fa-minus-circle" />
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </Modal>
      </main>
  );
}


export default App;
