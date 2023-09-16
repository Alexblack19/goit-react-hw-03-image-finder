import { Component } from 'react';
import { fetchPhoto } from '../../api/image-api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    dataPhoto: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const searchTag = this.props.photoTag;
    if (prevProps.photoTag !== searchTag) {
      fetchPhoto(searchTag, 1).then(data =>
        this.setState({ dataPhoto: data.hits })
      );
    }
  }

  render() {
    const { dataPhoto } = this.state;
    return (
      <Gallery>
        {dataPhoto &&
          dataPhoto.map(item => (
            <ImageGalleryItem key={item.id} photo={item} />
          ))}
      </Gallery>
    );
  }
}
