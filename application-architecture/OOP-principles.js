// Inheritance - the ability to acquire the properties of existing classes and create child ones.
class Character {
  constructor (power) {
    this.power = power;
  }
  sayPower = () => console.log(`My power is ${this.power}!`);
}  

class HeroCharacter extends Character {
  constructor (power, phrase) {
    super(power);
    this.phrase = phrase;
  }
  sayPhrase = () => console.log(this.phrase);
}  

// Encapsulation - object's capacity to "decide" which information it exposes to "the outside“ and which it doesn’t.
class TopHero extends HeroCharacter {
  #secretPower;
  constructor (power, phrase, secretPower) {
    super(power);
    this.phrase = phrase;
    this.#secretPower = secretPower;
  }
  sayPhrase = () => console.log(`My top hero speech is: ${this.phrase}!!!`);
  saySecretPower = () => console.log(this.#secretPower);
}

let topHero = new TopHero(300, 'I am super top hero best', 'very secret indeed');
topHero.sayPhrase();
topHero.sayPower();
topHero.saySecretPower();

// Abstraction - only expose to the outside the properties and methods that you're going to use. 
class Villain {
  #birthYear;
  constructor(name, birthYear) {
    this.#birthYear = birthYear;
    this.name = name;
  }
  getAge = () => console.log(this.#calculateAge());
  #calculateAge = () => new Date().getFullYear() - this.#birthYear;
}

let villain = new Villain('Evil', 1990);
console.log(villain);
villain.getAge();




