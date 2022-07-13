// How to create new String object and set value to false? 
var str1 = new String();
var str2 = new String('');
var str3 = new String(null);

console.log(typeof str1, typeof str2, typeof str3); 
str1 == false; // => true

// What will be returned?
const box = { x: 10, y: 20 };
  Object.freeze(box);
const shape = box;
  shape.x = 100;
console.log(shape); // => {x: 10, y: 20}

const usero = {
    password: 'Password!',
    name: 'Nabbon',
    id: 300
}
const organize = object => ({id: undefined, ...object});
console.log(organize(usero)); // => ???

// What will be in result?
let personL = {name: 'Lidia'};
  const members = [personL];
    personL = null;
console.log(members); // => [{ name: "Lydia" }]
// Коли ви призначаєте посилання з однієї змінної до іншої, ви створюєте копію цього посилання. (Зверніть увагу, що у них не однакові посилання!)

const personLi = {
  name: 'Linda',
  age: 31
};

for (const item in personLi) {
  console.log(item);
} // => "name", "age"
// У кожному циклі ми встановлюємо значення item рівним поточному ключу, яким він перебирається.

const admin = {
  admin: true,
  ...personLi // spread operator
};
console.log(admin); // => {admin: true, name: 'Linda', age: 31}


