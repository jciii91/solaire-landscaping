import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery() {
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter('commercial')}</h1>
      <p>{'Filler text'}</p>
      <PhotoList category={'commercial'} />
    </section>
  );
}
export default Gallery;