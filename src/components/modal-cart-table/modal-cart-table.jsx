import React from 'react';
import { connect } from 'react-redux';
import './modal-cart-table.css';


const ModalCartTable = ({ items, totalCart }) => {
  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    
    return (
      <tr key={ id }>
        <td scope="row">{ idx + 1 }</td>
        <td>{ name }</td>
        <td>{ count }</td>
        <td>{ total }</td>
        <td className="modal__wrap-btn">
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
    );
  };
  
  return (
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
        { items.map(renderRow) }
        </tbody>
      </table>
  
      <div className="modal__total">
        Total: ${ totalCart }
      </div>
    </div>
  );
};


const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    totalCart: orderTotal
  };
};

const mapDispatchToProps = () => {
  return {
  
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalCartTable);
