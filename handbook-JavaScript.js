//Виконати один або інший блок коду, залежно від умови:
if (умова) {
   console.log("виконається, якщо умова істинна (true)");
} else {
   console.log("виконається, якщо умова помилкова (false)");
};


//Виконати блок коду, якщо умова дійсна, або пропустити його:
if (умова) {
   console.log("виконаюся, якщо умова істинна");
};


//Виконати блок коду, у якого умова істинна і знаходиться найвище у списку, інші перевірки проігнорувати:
if (умова1) {
   // ...
} else if (умова2) {
   // ...
} else if (умова3) {
   // ...
} else {
   // виконається, якщо всі умови вищі були помилковими
};

/* х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х */
for (ініціалізація; умова; завершальна операція) {
   // Тіло циклу
}

for (let count = 5; count > 0; count--) {
   console.log(count)
} // надрукує 5, 4, 3, 2, 1

/* х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х */
switch (ім'я_змінної_значення_з_якою_порівнюємо) {
   case значення:
     // код
     break
};

//Приклад вітання користувача в залежності від статусу:
switch (membershipStatus) {
   case "vip":
     // виконається, якщо в змінній membershipStatus зберігається рядок "vip"
     console.log("Вітаємо вас, ваша пишнота!")
     console.log("раді вас бачити!")
     break
   case "diamond":
     console.log("Здрастуйте, діамантовий клієнт!")
     break
   case "gold":
     console.log("Привіт, золотий мій!")
     break
   default:
     // виконається, якщо жоден інший випадок не спрацював
     console.log("Хто ти?")
     break
};

//Серед завдань є особливий підтип – коли потрібно подивитися на значення змінної та виконати різний код залежно від цього значення.
let discount;
if (memberStatus === "vip") {
   discount = 0.25;
} else if (memberStatus === "diamond") {
   discount = 0.2;
} else if (memberStatus === "gold" || memberStatus === "silver") {
   // знижка 10% користувачам статусу золотий та срібний
   discount = 0.1;
} else {
   discount = 0;
};
//Код вище працює, але виглядає надмірно - у ньому дуже багато порівнянь. Можна зробити ось так:
let discount;
switch (memberStatus) {
   case "vip":
     discount = 0.25;
     break
   case "diamond":
     discount = 0.2;
     break
   case "gold":
   case "silver":
     // можна написати кілька кейсів та зв'язати з одним блоком
     discount = 0.1;
     break
   default:
     discount = 0;
     break
};
/* х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х */

//Метод tofixed перетворює число в рядок із зазначеною кількістю знаків після коми. Якщо необхідно, число округляється:
const num = 10.468;
console.log(num.toFixed(4));
// '10.4680'
console.log(num.toFixed(3));
// '10.468'
console.log(num.toFixed(2));
// '10.47'
console.log(num.toFixed(0));
// '10'
//Якщо після округлення потрібно робити інші арифметичні операції, то краще розпарсувати число за допомогою parseFloat


//Метод toLocaleString перетворює число на рядок, враховуючи локаль (інформація про мову користувача, а також регіональні налаштування) користувача.
/*Найчастіше використовуються два види:
код_мови. 
Наприклад, 'ru' (російська мова), 'de' (німецька), 'en' (англійська).
код_мови-код_регіону. 
Наприклад, de-AT (австрійська німецька), 'en-US' (американська англійська), es-AR (аргентинська іспанська)*/
const bigNumber = 100000000;
console.log(bigNumber.toLocaleString("ru")); // 100 000 000
console.log(bigNumber.toLocaleString("en-US")); // 100,000,000
console.log(bigNumber.toLocaleString("ar-SA")); // ١٠٠٬٠٠٠٬٠٠٠

/*другим аргументом методу можна передати об'єкт з тонкими налаштуваннями форматування. 
Наприклад, вказати, що число, що форматується, — гроші:*/
const bigNumber = 100000000
console.log(bigNumber.toLocaleString('es', { style: 'currency', currency: 'EUR' }))
// 100.000.000,00 €


//коли потрібно згенерувати випадкове число в заданому діапазоні
Math.floor(Math.random() * (max - min)) + min;


/*об'єкт, що зберігається в const, можна мутувати;
Об'єкти зберігаються за посиланням. Зміна об'єкта не призводить до зміни посилання на нього:*/
const obj = {
  a: 5,
};
obj.a = 10;
console.log(obj);
// { a: 10 };


//Приклад розрахунку квадратів чисел із масиву:
const numbers = [2, 3, 4, 5];
let i = 0
while (i < numbers.length) {
   const currentElement = numbers[i]
   console.log(currentElement * currentElement)
   i++
}; // Надрукує 4, 9, 16, 25 та поверне 3

/* х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х */
//Базовий варіант створення функції:
function hello(name) {
  alert("hello" + name)
};

function isAdult(age) {
  return age > 18
};


//Певний код «згрупований» і об'єднаний у функцію, наприклад, перевірка — парне число чи ні:
function isInteger(value) {
  if (undefined === value || null === value) {
    return false
  }
  return value % 2 == 0
};


//Якщо функція зберігається в об'єкті, це метод цього об'єкта.
const user = {
   name: "Alex",
   greet() {
     console.log("Hello, my name is Alex")
   },
}
//user.greet – це метод об'єкта user.
user.greet() // Hello, my name is Alex


//У нижньому випадку значення this – охоплює цей об'єкт
const user = {
  name: "Alex",
  greet() {
    console.log(`Hello, my name is ${this.name}`)
  },
}
user.greet(); // Hello, my name is Alex
//при заміні імені користувача метод підлаштовується
user.name = "Max";
user.greet(); //Hello, my name is Max


//За угодами конструктори викликають за допомогою ключового слова new, а також називають з великої літери іменником.
//Наприклад, якщо конструктор буде створювати об'єкти користувачів, ми можемо назвати його User, а використовувати так:
function User() {
  this.name = "Alex"
}

const firstUser = new User()
firstUser.name === "Alex" // true

//При роботі з функціями-конструкторами легко забути про new та викликати їх неправильно:
const firstUser = new User() // Правильно.
const secondUser = User() // Неправильно,

/* х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х */

//Різниця між .call() і .apply() — у тому, як вони приймають аргументи самої функції після this.
function greet(greetWord, emoticon) {
  console.log(`${greetWord} ${this.name} ${emoticon}`)
};
const user1 = { name: "Alex" };
const user2 = { name: "Ivan" };

// .call() принимает аргументы списком через запятую:
greet.call(user1, "Hello,", ":-)") // Hello, Alex :-)
greet.call(user2, "Good morning,", ":-D") // Good morning, Ivan :-D

// .apply() же — принимает массив аргументов:
greet.apply(user1, ["Hello,", ":-)"]) // Hello, Alex :-)
greet.apply(user2, ["Good morning,", ":-D"]) // Good morning, Ivan :-D
//В іншому вони ідентичні. 

/* х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х */
function greet() {
  console.log(`Hello, ${this.name}`)
}
const user1 = { name: "Alex" };
//Зауважте, що .bind() на відміну від .call() і .apply() не викликає функцію відразу. 
const greetAlex = greet.bind(user1);
greetAlex(); // Hello, Alex
//Натомість він повертає іншу функцію — пов'язану із зазначеним контекстом назавжди. Контекст цієї функції неможливо змінити.
function getAge() {
  console.log(this.age);
};
const howOldAmI = getAge.bind({age: 20}).bind({age: 30});

howOldAmI(); //20

/* х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х-х */

//напишемо невелику функцію для знаходження всіх непарних елементів у масиві
//Імперативний стиль (набір конкретних команд, які виконуються послідовно одна за одною)
function onlyOdd(array) {
  let result = []
  for (const element of array) {
    if (element % 2 !== 0) {
      result.push(element)
    }
  };
  return result;
  }
  
//Декларативний стиль (нам лише важливо, який масив на виході ми хочемо отримати)
function onlyOdd(array) {
  return array.filter((element) => element % 2 !== 0)
}


