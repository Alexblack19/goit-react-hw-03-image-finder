import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notiflix from 'notiflix';
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { getAllPhoto } from '../api/image-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    dataPhoto: null,
    error: '',
    page: 1,
    showModal: false,
    photoTag: '',
    isLoading: false,
    currentLargeImageUrl: '',
    currentImageTags: '',
  };

  componentDidUpdate(_, prevState) {
    const searchTag = this.state.photoTag;
    // console.log("compdidup", this.state.page);
    if (prevState.photoTag !== searchTag) {
      this.setState({ dataPhoto: null });
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

      if (data.hits.length === 0) { this.notificationTry()
        // Notiflix.Notify.warning(
        //   'Sorry, there are no images matching your search query. Please try again.',
        //   {
        //     position: 'center-center',
        //     fontSize: '18px',
        //     cssAnimationStyle: 'zoom',
        //     cssAnimationDuration: 1000,
        //     width: '380px',
        //   }
        // );
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

  openModal = e => {
    const currentLargeImageUrl = e.target.dataset.large;
    const currentImageTags = e.target.alt;

    this.setState({ currentLargeImageUrl, currentImageTags });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = photoTag => {
    this.setState({ photoTag });
    this.setState({ page: 1 });
  };

  handleLoadMore = () => {
    const page = this.state.page + 1;
    this.setState({ page: page });
    this.fetchPhoto(this.state.photoTag, page);
  };

  notificationTry() {
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

  notificationCatch() {}

  render() {
    const {
      showModal,
      dataPhoto,
      isLoading,
      currentLargeImageUrl,
      currentImageTags,
    } = this.state;
    const { handleFormSubmit, toggleModal } = this;

    return (
      <div>
        {/* <button type="button" onClick={toggleModal}>
          Open modal
        </button> */}
        <GlobalStyle />
        <Searchbar onSubmit={handleFormSubmit} />

        <ImageGallery photos={dataPhoto} openModal={this.openModal} />
        {isLoading && <Loader />}
        {showModal && (
          <Modal
            imageUrl={currentLargeImageUrl}
            imageTags={currentImageTags}
            onClose={toggleModal}
          />
        )}
        {/* {dataPhoto && console.log('dataPhoto.length:', dataPhoto.length)}
        {console.log('page:', page)} */}
        <Button handleLoadMore={this.handleLoadMore} />
        {/* {dataPhoto && dataPhoto.length >= 12 && (
          <Button handleLoadMore={this.handleLoadMore} />
        )} */}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
