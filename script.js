//Задание 1
let x = 5 + 10 * 2; // +, * - операторы, 5,10,2- операнды
let isValid = (x > 10) && (x < 30); // >, &&, <- операторы, x, 10, 30 -операнды
x++; // ++ -  оператор,x- операнд
delete obj.prop; // delete - оператор, obj.prop - операн

//Задание 2: Арифметические операторы
1)
let sum = 1+2;
console.log(sum);
2)
let difference = 5-1;
console.log(difference);
3)
let A = 5*2;
console.log(A);
4)
let B = 6/2;
console.log(B);
5)
let C = 7%2;
console.log(C);
6)
let D = 7**2;
console.log(D);
//Задание 3:Бинарные и унарные операторы
let a = 10;// = - бинарный оператор присвоения
let b = -a; // - это унарный оператор, b будет равно -a
a++; // ++ - Инкремент, унарный опертор, увеличивает переменную на 1
let c = a + b; // =, + - бинарные операторы
//Задание 4: Операторы проверки отношений
let x = 15;
let y = 20;
if (x===y) {
    alert('Число ' + x + ' равно ' + y)
};
if (x>y) {
    alert('Число ' + x + ' больше ' + y)
} else {
    alert('Число ' + x + ' меньше ' + y)
};
//Задание 5: Проверка на равенство и неравенство
5 == '5'; // true, строка '5' становится числом 5
5 === '5'; // false, так как сравниваются разные типы
null == undefined; // true, Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.
null === undefined; // false, так как различны их типы.
//Задание 6: Оператор in
let user = {
    name: 'John',
    age: 30
    };
    console.log('name' in user); //true, свойство содержится в указанном объекте
    console.log('email' in user); //false, свойство не содержится в указанном объекте
//Задание 7: Оператор присваивания и комбинирование с другими операторами
let a = 10;
a = a + 5; // a += 5; a=15
a = a * 2; // a *= 2; a=20
a = a - 3; // a -= 3; a=7
//Задание 8: Логические операторы
let isAdmin = true;
let isLoggedIn = false;
let canViewPage = isAdmin && isLoggedIn; // false, так как isLoggedIn аргумент false, поэтому && вернёт false
let hasPermission = isAdmin || isLoggedIn; // true, так как  isAdmin аргумент true,поэтому || вернёт true
let isGuest = !isLoggedIn; //true, так как  isLoggedIn = false, а противоположное значение true
//Пример
let a = 3;
let b = -2;
console.log(!a);//false 
console.log(a > 0 && b > 0);//false
console.log(a > 0 || b > 0);//true
//Задание 9: Тернарный оператор

let isLoggedIn = true;
console.log(isLoggedIn? "Добро пожаловать": "Вход запрещен");

let isLoggedIn = false;
console.log(isLoggedIn? "Добро пожаловать": "Вход запрещен");
//Задание 10: Оператор typeoftypeof и оператор delete

console.log(typeof 123); // number
console.log(typeof 'Hello'); // string
console.log(typeof undefined); // undefined

let car = {
make: 'Toyota',
model: 'Corolla'
};
delete car.model; // возвращает true, свойство  model удалено
console.log(car); // {make: 'Toyota'}

//Задание 11: Практика с несколькими операторами

let num1 = 10;
let num2 = 20;
//1)
let sum = num1+num2;
console.log(sum);
//2)
let difference = num1-num2;
console.log(difference);
//3)
let A = num1*num2;
console.log(A);
//4)
let B = num1/num2;
console.log(B);
//5)
if (num1===num2) {
    alert('Число ' + num1 + ' равно ' + num2)
};
if (num1>num2) {
    alert('Число ' + num1 + ' больше ' + num2)
} else {
    alert('Число ' + num1 + ' меньше ' + num2)
}; 
//6)
console.log(!num1);//false 
console.log(num1 > 0 && num2 > 0);//true
console.log(num1 > 0 || num2 > 0);//true
//7)
console.log(num1<num2? "Добро пожаловать": "Вход запрещен");

