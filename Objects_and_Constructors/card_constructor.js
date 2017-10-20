// Create a constructor Card. A card object will have 2 properties:

// point - the point value of the card: a number between 1 and 13.
// suit - the suit of the card: one of diamonds, clubs, hearts and spades.


class Card {
  constructor(point, suit) {
    this.point = point;
    this.suit = suit;
  }
}

var myCard = new Card(5, 'diamonds');

console.log(myCard.point)
console.log(myCard.suit)
