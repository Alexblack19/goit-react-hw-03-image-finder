
export function ImageGalleryItem({ photo }) { 
  return (
    <li className="gallery-item">
      <img src={photo.previewURL} alt={photo.tags} />
    </li>
  );
}
