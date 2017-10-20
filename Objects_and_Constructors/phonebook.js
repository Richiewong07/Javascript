function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

// Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.

var sonny = new Person('Sonny', 'sonng@hotmail.com', '483-485-4948');

// Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.

var jordan = new Person('Jordan', 'jordan@aol.com', '495-586-4948');

// Have sonny greet jordan using the greet method.
sonny.greet(jordan);

// Have jordan greet sonny using the greet method.
jordan.greet(sonny);

// Write a statement to print the contact info (email and phone) of Sonny.
console.log(`--${sonny.name}'s Info --\nEmail: ${sonny.email}\nPhone ${sonny.phone}`)

// Write another statement to print the contact info of Jordan.
console.log(`--${jordan.name}'s Info --\nEmail: ${jordan.email}\nPhone ${jordan.phone}`)
