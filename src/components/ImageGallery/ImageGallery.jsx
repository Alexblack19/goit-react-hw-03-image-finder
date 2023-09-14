import { Component } from 'react';
import { fetchPhoto } from '../../api/image-api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    dataPhoto: null,
  };

  componentDidMount() {
    fetchPhoto('cat', 1).then(data => this.setState({ dataPhoto: data.hits }));
  }

  render() {
    return (
      <ul className="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}
