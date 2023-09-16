import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    showModal: false,
    photoTag: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = photoTag => {
    this.setState({ photoTag });
  };

  render() {
    const { showModal, photoTag } = this.state;
    const {handleFormSubmit, toggleModal} = this;

    return (
      <div>
        {/* <button type="button" onClick={toggleModal}>
          Open modal
        </button> */}
        <GlobalStyle />
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery photoTag={photoTag}/>
        {showModal && (
          <Modal
            onClose={toggleModal}
            image={
              'https://pixabay.com/get/gd627b425afcad78d2020b32bc962b5fb8342c15634b91ef0529e6d8e455f3353d1cd65ef50aedf571dc6eef264b47b376516f1bccec8f168e591feca2c35d213_1280.jpg'
            }
          />
        )}
      </div>
    );
  }
}
