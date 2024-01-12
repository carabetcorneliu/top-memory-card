import PropTypes from 'prop-types';
import '../styles/Scoreboard.css';

const Scoreboard = ({ newScore, newBestScore }) => {
  return (
      <div className='scoresboardContainer'>
        <p className='bestScore'>Best Score: {newBestScore}</p>
        <p className='score'>Score: {newScore}
        </p>
      </div>
  )
}

Scoreboard.propTypes = {
  newScore: PropTypes.number.isRequired,
  newBestScore: PropTypes.number.isRequired
}

export default Scoreboard;
