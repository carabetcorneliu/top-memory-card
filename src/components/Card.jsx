import PropTypes from 'prop-types';
import '../styles/Card.css';

const Card = ({ title, imageSrc, handleClick }) => {
  return (
    <div className='card hoverOn' onClick={handleClick}>
      <img className="cardImage" src={imageSrc} alt={title} />
      <h1 className="title">{title}</h1>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Card;
