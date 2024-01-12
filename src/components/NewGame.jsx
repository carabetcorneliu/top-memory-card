import PropTypes from 'prop-types';
import '../styles/NewGame.css'

const NewGame = ({ handleNewGame }) => {
  return (
    <div className='newGameContainer'>
      <button type='button' onClick={handleNewGame} className='newGame'>
        New Game
      </button>
    </div>
  )
}

NewGame.propTypes = {
  handleNewGame: PropTypes.func.isRequired
}

export default NewGame;