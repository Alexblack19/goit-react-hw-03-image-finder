import Notiflix from 'notiflix';
import { Component } from 'react';
import { getAllPhoto } from '../../api/image-api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
// import { Loader } from '../Loader/Loader';

export class ImageGallery extends Component {
  state = {
    dataPhoto: null,
    error: '',
    page: 1,
    // isLoading: false,
  };

  componentDidUpdate(prevProps) {
    // this.setState({ isLoading: true });

    const searchTag = this.props.photoTag;
    if (prevProps.photoTag !== searchTag) {
      this.fetchPhoto(searchTag, this.state.page);
    }
  }

  fetchPhoto = async (searchTag, page) => {
    try {
      const data = await getAllPhoto(searchTag, page);
      this.setState({ dataPhoto: data.hits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      // this.setState({ isLoading: false });
    }
  };

  render() {
    const { dataPhoto, error } = this.state;
    return (
      <Gallery>
        {/* {isLoading && <h1>Loading.........</h1>} */}
        {error &&
          Notiflix.Notify.warning(error, {
            position: 'center-center',
            fontSize: '16px',
            width: '340px',
          })}
        {dataPhoto &&
          dataPhoto.map(item => (
            <ImageGalleryItem key={item.id} photo={item} />
          ))}
      </Gallery>
    );
  }
}
