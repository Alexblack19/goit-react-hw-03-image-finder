import { Component } from 'react';
import { fetchPhoto } from '../../api/image-api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    dataPhoto: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const name = this.props.tagSearch;
    if (prevProps.tagSearch !== name) {
      fetchPhoto(name, 1).then(data => this.setState({ dataPhoto: data.hits }));
    }
  }

  render() {
    return (
      <Gallery>
        {this.state.dataPhoto &&
          this.state.dataPhoto.map(item => (
            <ImageGalleryItem key={item.id} photo={item} />
          ))}
      </Gallery>
    );
  }
}
