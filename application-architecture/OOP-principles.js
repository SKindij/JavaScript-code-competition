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




