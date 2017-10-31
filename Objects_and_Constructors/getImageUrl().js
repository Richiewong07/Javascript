// Add a getImageUrl method to card objects by adding it as a property to Card.prototype. The method should return the URL path to the png image file for the card.


class Card {
  constructor(point, suit) {
    this.point = point;
    this.suit = suit;
  }
}

Card.prototype.getImageURL = function () {
  return `images/${this.point}_of_${this.suit}.png`;
}


var myCard = new Card(2, 'diamonds');

console.log(myCard.getImageURL());
