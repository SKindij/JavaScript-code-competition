// With which constructor can we successfully extend the Dog class?
class Dog {
    constructor(name) {
        this.name = name;
    }
}
class Labrador extends Dog {
    constructor(name, size) {
// In a derived class, you cannot access this until super is called.
  super(name);
  this.size = size;
    }
};





