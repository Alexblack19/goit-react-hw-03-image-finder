import { GalleryItem, Image } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ photo: { webformatURL, tags, largeImageURL }, openModal }) {
  return (
    <GalleryItem>
      <Image src={webformatURL} alt={tags} data-large={largeImageURL} onClick={openModal}/>
    </GalleryItem>
  );
}
