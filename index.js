// Code your solutions in this file
function writeCards(names, event) {
    let thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
      thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
  }
  console.log(writeCards(["Alice", "Bob"], "birthday"));
  [
    "Thank you, Alice, for the wonderful birthday gift!",
    "Thank you, Bob, for the wonderful birthday gift!"
  ]
  function countDown(number) {
    let count = number;
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  