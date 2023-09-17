import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export function ImageGallery({ photos, openModal }) {
  return (
    <Gallery>
      {photos &&
        photos.map(item => (
          <ImageGalleryItem key={item.id} photo={item} openModal={openModal} />
        ))}
    </Gallery>
  );
}
