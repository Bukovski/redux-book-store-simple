import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalCustomContainer, ModalCustomOverlayContainer } from './modal.styles'
import './modal.css';


class Modal extends Component {
  shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  
  render () {
    const { show, children, handleClose } = this.props;
    
    return (
      <React.Fragment>
        <ModalCustomContainer show={ show }>
          <span className="modal-custom__close" onClick={ handleClose }>
            <i className="modal-custom__img fa fa-close" />
          </span>
          <div className="modal-custom__dialog">
            { children }
          </div>
        </ModalCustomContainer>
        <ModalCustomOverlayContainer
          show={ show }
          onClickCapture={ handleClose }
        />
      </React.Fragment>
    )
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired
};


export default Modal;