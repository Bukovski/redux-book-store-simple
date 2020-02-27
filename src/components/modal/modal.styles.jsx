import styled, { css } from 'styled-components'


const visibleBlock = css`
  visibility: visible;
`;

const hiddenBlock = css`
  opacity: 0;
  visibility: hidden;
`;

const getToggleVisibleStyles = props => {
  if (props.show) {
    return visibleBlock;
  }
  
  return hiddenBlock;
};

export const ModalCustomOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #4c4c4c;
  transition: all .5s linear;
  opacity: .5;
  z-index: 20;

  
  ${ getToggleVisibleStyles }
`;

export const ModalCustomContainer = styled.div`
  display: inline-block;
  padding: 23px 18px;
  min-width: 425px;
  position: fixed;
  left: 50%;
  top: 50%;
  border-radius: 10px;
  transform: translate(-50%,-50%);
  margin: auto;
  background-color: #fff;
  transition: all .5s linear;
  opacity: 1;
  z-index: 30;
  
  ${ getToggleVisibleStyles }
`;