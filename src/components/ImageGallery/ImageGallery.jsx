import Notiflix from 'notiflix';
import { Component } from 'react';
import { fetchPhoto } from '../../api/image-api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    dataPhoto: null,
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const searchTag = this.props.photoTag;
    if (prevProps.photoTag !== searchTag) {
      fetchPhoto(searchTag, 3)
        .then(data => this.setState({ dataPhoto: data.hits }))
        .catch(error => this.setState({ error: error.message }));
    }
  }

  render() {
    const { dataPhoto, error } = this.state;
    return (
      <Gallery>
        {error && Notiflix.Notify.failure(error, { position: 'center-center', fontSize: '16px', width:'320px' })}
        {dataPhoto &&
          dataPhoto.map(item => (
            <ImageGalleryItem key={item.id} photo={item} />
          ))}
      </Gallery>
    );
  }
}
