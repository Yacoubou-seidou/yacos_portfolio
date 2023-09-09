import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
const ProjectGallery = ({ gallery }) => {
  return (
    gallery ?
      <Carousel pause='hover'>
        {gallery.map((image, index) => (
          <Carousel.Item key={image + index} >
            <div >
              <img src={image.link} alt={image.name} className='detail_image' />
            </div>
            <Carousel.Caption>
              <div className="text">
                <p>{image.name}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel> : ''
  )
}

ProjectGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectGallery
