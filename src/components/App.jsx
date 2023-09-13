import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';

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
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src="https://pixabay.com/get/g8058c8e35d084e009c5fce21453557778c067c7228724816f4580a502e6668a0035c9a72e587a399e74197fa661c374db16ad61cd2094ca423fddfb48375fca0_1280.jpg"
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
