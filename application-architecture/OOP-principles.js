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
DRY 	- Don’t Repeat Yourself
KISS 	- Keep It Simple, Stupid
YAGNI - You Ain’t Gonna Need It
*/

// Inheritance using Classes AND Inheritance using a Constructor Function
class ToyHaracter {  // function ToyHaracter() {};
  talk() {           // ToyHaracter.prototype.talk = function () {
    return 'I am toy hero!'; //  return 'I am toy hero!';
  }                       // }
}
  const teddyBear = new ToyHaracter();
  const woodenBear = new ToyHaracter();
  const plasticBear = new ToyHaracter();
    teddyBear.talk(); // or plasticBear.talk();
// To update the function for both instances you only have to do it once:
ToyHaracter.prototype.talk = function () {
  return 'I am toy hero with new and improved Talking';
}; 
    woodenBear.talk(); // I am toy hero with new and improved Talking

// Extending a Class using 'extends'
class FlyingToy extends ToyHaracter {
  fly() {
    return 'I can fly!';
  }
}
const flyingBear = new FlyingToy();
  flyingBear.talk();
  flyingBear.fly();

// JS prototypal inheritance
const Human = {
  kind: 'human'
}
const serhii = Object.create(Human);
    serhii.age = 41;
        serhii;
        serhii.kind;

// what is Factory Function?
function personFactory(name) {
  return {
    greating() {
      return `Hello! I am ${name}`
    }
  }
}
const me = personFactory('Serhii');
  me.greating();
const she = personFactory('Tania');
  she.greating();

// what is Factory Function?
function createElement(type, text, color) {
  const el = document.createElement(type);
    el.innerText = text;
    el.style.color = color;
      document.body.append(el);
  return {
    el,
    setText(newText) {
      el.innerText = newText;
    },
    setColor(newColor) {
      el.style.color = newColor;
    }
  }
}
const h2 = createElement('h2', 'it is new paragraph', 'blue');
const h3 = createElement('h3', 'it is next paragraph', 'orange');

// what is Comstructor Function?
function Personage(name) {
  this.name = name;
  this.greating = () => {
    return `Hello! I am ${this.name}`
  }  
}  
const svinFather = new Personage('Father Svin');
  svinFather.greating(); // 'Hello! I am Father Svin'

// Factory function vs Constructor vs Class
const myCoolProto = {
  talk() {
    return `Hello, I am ${this.name}!`
  }
}  
function createCoolPerso(name) {
  return Object.create(myCoolProto, {
    name: {
      value: name
    }
  })
}
const he = createCoolPerso('Makson');
  he; 

/* 
CREATIONAL Patterns: SINGLETON, FACTORY METHOD, BUILDER, PROTOTYPE;
STRUCTURAL Patterns: COMPOSITE, DECORATOR, FACADE, PROXY;
BEHAVIOURAL Patterns: MEMENTO, MEDIATOR, OBSERVER;
Architectural Patterns: MVC, MVP, MVVM;
*/
// CONSTRUCTOR
class Server {
  constructor(name, ip) {
    this.name = name
    this.ip = ip
  }
  getUrl() {
    return `https://${this.ip}:80`
  }
}
const aws = new Server('AWS German', '82.21.21.32')
  console.log(aws.getUrl()) // https://82.21.21.32:80

// FACTORY
class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}
class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}
class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  }

  create(name, type = 'simple') {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple
    const member = new Membership(name)
    member.type = type
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }
    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Vladilen', 'simple'),
  factory.create('Elena', 'premium'),
  factory.create('Vasilisa', 'standard'),
  factory.create('Ivan', 'premium'),
  factory.create('Petr')
]

members.forEach(m => {
  m.define()
})







