var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black'
};
var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};


// Write code to make daughter inherit properties from mom. What are the daugther's properties and their values? Print them out.

console.log(daughter.__proto__ = mom)


// Add a method called showInfo to mom by attaching a function to it as a property. Calling this method will print out all four properties. Call this method on both mom and daugthe

mom.showInfo = function() {
  console.log(`Name: ${this.firstName} ${this.lastName}\n Eye Color: ${this.eyeColor}\n Hair Color: ${this.hairColor}\n`);
}
console.log(mom.showInfo(), daughter.showInfo())
