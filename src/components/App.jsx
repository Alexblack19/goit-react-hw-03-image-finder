import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notiflix from 'notiflix';
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { getAllPhoto } from '../api/image-api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    dataPhoto: null,
    error: '',
    page: 1,
    showModal: false,
    photoTag: '',
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const searchTag = this.state.photoTag;
    if (prevState.photoTag !== searchTag) {
      
      this.fetchPhoto(searchTag, this.state.page);
    }
  }

  fetchPhoto = async (searchTag, page) => {
    this.setState({ isLoading: true });
    try {
      const data = await getAllPhoto(searchTag, page);

      if (!this.state.dataPhoto) {
        this.setState({ dataPhoto: data.hits });
      } else {
        this.setState({ dataPhoto: [...this.state.dataPhoto, ...data.hits] });
      }

      if (data.hits.length === 0) {
        Notiflix.Notify.warning(
          'Sorry, there are no images matching your search query. Please try again.',
          {
            position: 'center-center',
            fontSize: '18px',
            cssAnimationStyle: 'zoom',
            cssAnimationDuration: 1000,
            width: '380px',
          }
        );
      }
    } catch (error) {
      this.setState({ error: error.message });
      Notiflix.Notify.warning(error, {
        position: 'center-center',
        fontSize: '16px',
        width: '340px',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = photoTag => {
    this.setState({ photoTag });
  };

  handleLoadMore = () => {
    const page = this.state.page + 1;
    this.setState({ page: page });
    console.log(page);
    this.fetchPhoto(this.state.photoTag, page);
  };

  render() {
    const { showModal, dataPhoto, isLoading } = this.state;
    const { handleFormSubmit, toggleModal } = this;

    return (
      <div>
        {/* <button type="button" onClick={toggleModal}>
          Open modal
        </button> */}
        <GlobalStyle />
        <Searchbar onSubmit={handleFormSubmit} />

        <ImageGallery photos={dataPhoto} />
        {isLoading && <Loader />}
        {showModal && (
          <Modal
            onClose={toggleModal}
            image={
              'https://pixabay.com/get/gd627b425afcad78d2020b32bc962b5fb8342c15634b91ef0529e6d8e455f3353d1cd65ef50aedf571dc6eef264b47b376516f1bccec8f168e591feca2c35d213_1280.jpg'
            }
          />
        )}

        <Button handleLoadMore={this.handleLoadMore} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
