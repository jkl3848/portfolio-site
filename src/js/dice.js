/*eslint-disable*/

export const diceFuncs = () => {
  function rollDice(diceArray) {
    console.log(diceArray);
    let total = 0;

    for (let i = 0; i < diceArray.length; i++) {
      let die = diceArray[i];
      die.val = randomNum(die.max);
      console.log(die.val);
      total = total + die.val;
    }

    console.log(total);

    return { total: total, dice: diceArray };
  }

  function randomNum(range) {
    let min = Math.ceil(1); // Round up to the nearest integer
    let max = Math.floor(range); // Round down to the nearest integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return {
    rollDice,
  };
};

export default diceFuncs;
