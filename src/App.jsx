import React, { useState, useEffect } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Card from './components/Card';
import NewGame from './components/NewGame';

function App() {
  const initialCards = [
    { title: 'Zeama de Pui', imageSrc: './assets/moldavian-foods/zeama-de-pui.webp', clicked: false },
    { title: 'Bors Scazut', imageSrc: './assets/moldavian-foods/bors-scazut.webp', clicked: false },
    { title: 'Sarmale', imageSrc: './assets/moldavian-foods/sarmale.webp', clicked: false },
    { title: 'Mamaliga', imageSrc: './assets/moldavian-foods/mamaliga.webp', clicked: false },
    { title: 'Placinte la Tigaie', imageSrc: './assets/moldavian-foods/placinte-la-tigaie.webp', clicked: false },
    { title: 'Invartita', imageSrc: './assets/moldavian-foods/invartita.webp', clicked: false },
    { title: 'Baba neagra', imageSrc: './assets/moldavian-foods/baba-neagra.webp', clicked: false },
    { title: 'Cusma lui Guguta', imageSrc: './assets/moldavian-foods/cusma-lui-guguta.webp', clicked: false }
  ]

  const [cards, setCards] = useState(initialCards);
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  let gameOverState = false;

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  const adjustScore = () => {
    const newScore = score + 1;
    setScore(newScore);

    if (newScore > bestScore)
      adjustBestScore(newScore);
  };

  const adjustBestScore = (newScore) => {
    setBestScore(newScore);
  }

  const handleClick = (clickedCard) => {
    if (gameOverState === true) {
      alert('Game Over, start a New Game');
      return;
    } 
    if (clickedCard.clicked) {
      gameOver();
    } else if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      shuffleCards();
      adjustScore();
    } 
  };

  const gameOver = () => {
    gameOverState = true;
    alert('you lost');
  }

  const resetGame = () => {
    setScore(0);
    gameOverState = false;
    cards.forEach(card => card.clicked = false)
    shuffleCards();
  }

  return (
    <>
      <div className='header'>
        <div></div>
        <Scoreboard
          newScore={score}
          newBestScore={bestScore}
        />
        <div>
          <NewGame
            handleNewGame={() => resetGame()}
          />
        </div>
      </div>
      <div className='cardsContainer'>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            handleClick={() => handleClick(card)}
          />
        ))}
      </div>
    </>
  );
}

export default App
