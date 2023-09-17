import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';


// export class ImageGallery extends Component {
//   state = {
//     dataPhoto: null,
//     error: '',
//     page: 1,
//     // isLoading: false,
//   };

//   componentDidUpdate(prevProps) {
//     // this.setState({ isLoading: true });

//     const searchTag = this.props.photoTag;
//     if (prevProps.photoTag !== searchTag) {
//       this.fetchPhoto(searchTag, this.state.page);
//     }
//   }

//   fetchPhoto = async (searchTag, page) => {
//     try {
//       const data = await getAllPhoto(searchTag, page);
//       this.setState({ dataPhoto: data.hits });
//       if (data.hits.length === 0) {
//         Notiflix.Notify.warning(
//           'Sorry, there are no images matching your search query. Please try again.',
//           {
//             position: 'center-center',
//             fontSize: '18px',
//             cssAnimationStyle: 'zoom',
//             cssAnimationDuration: 1000,
//             width: '380px',
//           }
//         );
//       }
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       // this.setState({ isLoading: false });
//     }
//   };

//   render() {
//     const { dataPhoto, error } = this.state;
//     return (
//       <Gallery>
//         {/* {isLoading && <h1>Loading.........</h1>} */}
//         {error &&
//           Notiflix.Notify.warning(error, {
//             position: 'center-center',
//             fontSize: '16px',
//             width: '340px',
//           })}

//         {dataPhoto &&
//           dataPhoto.map(item => (
//             <ImageGalleryItem key={item.id} photo={item} />
//           ))}
//       </Gallery>
//     );
//   }
// }

export function ImageGallery({ photos, openModal }) {
  return (
    <Gallery>
      {photos &&
        photos.map(item => <ImageGalleryItem key={item.id} photo={item} openModal={openModal}/>)}
    </Gallery>
  );
}
