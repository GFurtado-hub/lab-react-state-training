import { useState } from 'react';

function Dice() {
  const diceImages = [
    '/assets/images/dice1.png',
    '/assets/images/dice2.png',
    '/assets/images/dice3.png',
    '/assets/images/dice4.png',
    '/assets/images/dice5.png',
    '/assets/images/dice6.png',
  ];
  const [currentDice, setCurrentDice] = useState(diceImages[0]);

  const rollDice = () => {
    setCurrentDice('/assets/images/dice-empty.png');
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setCurrentDice(diceImages[randomIndex]);
    }, 1000);
  };

  return <img src={currentDice} alt="Dice" onClick={rollDice} />;
}

export default Dice;