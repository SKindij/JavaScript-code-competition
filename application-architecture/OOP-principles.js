// OOP Design patterns are design level solutions for recurring problems in software development. 
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
  sayPhrase = () => console.log(this.phrase); //  we pass each class a different phrase parameter at instantiation.
  sayPower = () => console.log(`Power of ${this.power}!!!`);  // Override the parent method.
}  

// Encapsulation - object's capacity to "decide" which information it exposes to "the outside“ and which it doesn’t.
class TopHero extends HeroCharacter {
  #secretPower; //  first need to declare the private property, always using the '#' symbol as the start of its name.
  constructor (power, name, phrase, secretPower) {
    super(power, name);
    this.phrase = phrase;
    this.#secretPower = secretPower;
  }
  sayPhrase = () => console.log(`My top hero speech is: ${this.phrase}!!!`); // Override the parent method.
  saySecretPower = () => console.log(this.#secretPower);
}

// Abstraction - only expose to the outside the properties and methods that you're going to use. 
// Polymorphism - the same method can be used on different objects. 
class Villain extends Character {
    #birthYear;
    constructor(power, name, phrase, birthYear) {
        super(power, name);
        this.phrase = phrase;
        this.#birthYear = birthYear;
    }
    sayPhrase = () => console.log(this.phrase);
    getAge = () => console.log(this.#calculateAge());
    #calculateAge = ()  => new Date().getFullYear() - this.#birthYear
}


let villain = new Villain(100, 'Evil', 'I am bad', 1900);
villain.sayPhrase();
villain.sayPower();

let topHero = new TopHero(300, 'Top', 'I am super top hero best', 'very secret indeed');
topHero.sayPhrase();
topHero.sayPower();
topHero.saySecretPower();
console.log(topHero);

// SOLID principles are a set of five principles that ensure good Object-Oriented Design. 
// They instruct us on how to structure our functions and classes to make them as reliable, maintainable, and adaptable as feasible.
/*
  Single Responsibility 
  Open-Closed
  Liskov substitution
  Interface segregation 
  Dependency Inversion 
*/

/* 
CREATIONAL Patterns: SINGLETON, FACTORY METHOD, BUILDER, PROTOTYPE;
STRUCTURAL Patterns: COMPOSITE, DECORATOR, FACADE, PROXY;
BEHAVIOURAL Patterns: MEMENTO, MEDIATOR, OBSERVER;
Architectural Patterns: MVC, MVP, MVVM;
*/

/*
DRY 	- Don’t Repeat Yourself
KISS 	- Keep It Simple, Stupid
YAGNI - You Ain’t Gonna Need It
*/

// Inheritance using Classes
class ToyHaracter {
  talk() {
    return 'I am toy hero!';
  }
}
  const teddyBear = new ToyHaracter();
  const woodenBear = new ToyHaracter();
  const plasticBear = new ToyHaracter();
    teddyBear.talk(); // I am toy hero!
// To update the function for both instances you only have to do it once:
ToyHaracter.prototype.talk = function () {
  return 'I am toy hero with new and improved Talking';
}; 
    woodenBear.talk(); // I am toy hero with new and improved Talking





