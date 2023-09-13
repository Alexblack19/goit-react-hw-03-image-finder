import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }

  render() {
    return createPortal(
      <Overlay>
        <ModalDiv>{this.props.children}</ModalDiv>
      </Overlay>,
      modalRoot
    );
  }
}
