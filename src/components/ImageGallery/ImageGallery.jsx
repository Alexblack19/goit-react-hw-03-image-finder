import { Component } from 'react';
import { fetchPhoto } from '../../api/image-api';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    dataPhoto: null,
  };

  componentDidUpdate() {
    const name = this.props.tagSearch;
    if (name) {
      fetchPhoto(name, 1).then(data => this.setState({ dataPhoto: data.hits }));
    }
  }

  render() {
    return <ul className="gallery">{/* <ImageGalleryItem /> */}</ul>;
  }
}
