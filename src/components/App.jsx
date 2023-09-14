import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
// import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        <GlobalStyle />
        <Searchbar />
        {/* <ImageGallery /> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src="https://pixabay.com/get/g000f464bc8125bcf88c7e9a03c1ac1732d9d8a1be8e5192a91618ddc2b4bdd4ab1a7797e2179cae4abcfa9808e2634e5cb8c3292874177ad012941abee2cd5da_1280.jpg"
              alt=""
            />
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}
