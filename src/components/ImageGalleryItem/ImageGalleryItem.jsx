import { GalleryItem, Image } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ photo: { webformatURL, tags } }) {
  return (
    <GalleryItem>
      <Image src={webformatURL} alt={tags} />
    </GalleryItem>
  );
}
