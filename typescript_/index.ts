"use strict";
//Napisz funkcję implementującą licznik (każde uruchomienie +1) z wykorzystaniem var i let

var counter : number = 0;
let counter2: number = 0;

function SayHello()
{
    console.log("Hello");
    counter++;
    counter2++;
}

SayHello();
console.log(counter);
console.log(counter2);

//Napisz funkcję ze zmienną liczbą atrybutów (operator …). Wynikiem funkcji jest suma parametrów.

function Sum(...numbers: number[]) {
    let sum: number = 0;
	for (let singlenumber of numbers) {
        sum += singlenumber;
    }
    console.log(sum);
}

Sum(1,2,3);

// Zdefiniuj po jednym przykładzie zmiennych dostępnych w typescript.

// Boolean
let bool_: boolean = false;

// Number
let int_ : number = 33;
var double_ : number = 7.5;

// String
var string_ : string = "PzwJS";

// Array
var array_ : number[] = [33, 28, 11];

// Tuple
let tuple_ : [number, string, number, number];
tuple_ = [7, 'PzwJS', .777, 77];

// Enum
enum Enum_ {bad, average, awesome};
let grade : Enum_ = Enum_.awesome;

// Any
var any_ : any[] = [341, 'Supervisor', true];

// Void
function voidFunction(msg: string) : void {
	console.log(msg);
}

// Null or undefined
let undef_: undefined = undefined;
let null_: null = null;

// Alias
type Alias = Array<string>;
let arrayOfGrades : Alias = ['bad', 'average', 'awesome'];
console.log(arrayOfGrades);

// Union types
type Alias2 = Array<string|number>;
let arrayOfGrades2 : Alias2 = ['bad', 'average', 'awesome'];
let arrayOfNumbers : Alias2 = [25, 3, 2];
console.log(arrayOfGrades2);
console.log(arrayOfNumbers );

var names : string[]|string;
names = ["John", "Sam"];
console.log(names);
names = "Darren";
console.log(names);

// Never
function ErrorException(message: string): never {
    throw new Error(message);
}

//Object
function Create(o: object): void
{
console.log(o);
}
Create({ property: 0 });

// Zdefiniuj inferfejs (warunkowy*) osoba i wykorzystaj go w funkcji wyświetlające dane tej osoby.

interface User {
	firstName : string;
    lastName : string;
    email? : string;
    content : number|string;
}

function SayHelloToUser(user: User) : string {
    return `Welcome, ${user.firstName} ${user.lastName} ${user.email}
    Your content ${user.content}
    `;
}   

var TestUser = {
    firstName: 'Tod',
    lastName: 'Tisc',
    content: 1
};

var TestUser2 = {
    firstName: 'Tod',
    lastName: 'Tisc',
    content: 'wall of text'
};

var str: string = SayHelloToUser(TestUser);
console.log(str);
str = SayHelloToUser(TestUser2);
console.log(str);

//Zdefiniuj klasę car, oraz 3 obiekty będące jej instancjami.
// Dodaj do klasy konstruktor oraz funkcję wyświetlającą opis obiektu.

class Car {
    make: string;
    model: string;
    version: string;
    engineSize: number;
    horsePower: number;

	constructor(public make_ : string, public model_ : string, public version_ : string, public engineSize_ : number, public horsePower_ : number) {
        this.make = make_;
        this.model = model_;
        this.version = version_;
        this.engineSize = engineSize_;
        this.horsePower = this.horsePower_;
    }
    
    printData() {
        console.log(`Dane pojazdu: ${this.make}  ${this.model}  ${this.version}
              ${this.engineSize} ,  ${this.horsePower}`);
    } 
}

var car1 = new Car('VW','Passat','B5',1900,90);
var car2 = new Car('Mercedes-Benz','C','W124',2200,136);
var car3 = new Car('BMW','3','E90',2000,177);

car1.printData();
car2.printData();
car3.printData();

//  Zdefiniuj klasę truck dziedzicząca z klasy pojazd. Skorzystaj z operatora super.

class Truck extends Car {

    constructor(public make_ : string, public model_ : string, public version_ : string, public engineSize_ : number, public horsePower_ : number) 
    {
        super(make_, model_, version_, engineSize_, horsePower_);
    }
    
}

// Przerób klasy car i truck do postaci modułu – zaimportuj klasy.

// import {Car} from "./node_modules/car"
// import {Truck} from "./node_modules/car"

// var car1 = new Car('VW','Passat','B5',1900,90);
// car1.printData();

// var truck1 = new Truck('BMW','3','E90',2000,177);
// truck1.printData();


// Wykorzystaj await/promise do zaimplementowania funkcji asynchronicznej

function resolveAfterSeconds(ms: number)
{
    return new Promise<void>(function(resolve){
    setTimeout(resolve,ms)
    });
}

async function substraction(a: number, b: number)
{
    a = a+a+a;
    await resolveAfterSeconds(2000);
    b = b+b+b;
    await resolveAfterSeconds(2000);
    a = a/3;
    await resolveAfterSeconds(2000);
    b = b/3;
    await resolveAfterSeconds(2000);
    var result = a - b;
    console.log(result);
}

substraction(10,5);


// Zaimplementuj funkcję w postaci „strzałek”

let performUpload = function(imgStatus : string) : Promise<{imgStatus : string}> {
	return new Promise((resolve) => {
		console.log(`Status: ${imgStatus}`);
		setTimeout(() => {
			resolve({ imgStatus: imgStatus });
		}, 1000);
	});
}

performUpload('uploading...')
.then((res) => {
	return performUpload('compressing...');
})
.then((res) => {
	return performUpload('transferring...');
})
.then((res) => {
	return performUpload('Image upload completed.');
});

// Za pomocą dekoratora zmień funkcjonalność klasy lub metody (*)

class Post {
    @processOne()
    @processTwo()
    someFunction() {}
  }
  
  function processOne() {
    console.log("processOne has run");
    return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
      console.log("processOne has been called");
    }
  }
  
  function processTwo() {
    console.log("processTwo has run");
    return function (target, propertyKey : string, descriptor : PropertyDescriptor) {
      console.log("processTwo has been called");
    }
  }

//   class MathematicalOperation{

//     @ChangetoAdd()
//     substraction2(a: number, b: number)
//     {
//         a = a+a+a;
//         b = b+b+b;
//         a = a/3;
//         b = b/3;
//         var result = a - b;
//         console.log(result);
//     }
//   };

//   function ChangetoAdd() {
//     return function (target: any, propertyKey : string, descriptor : PropertyDescriptor) {
//         console.log("Wykorzystano dekorator");
//         descriptor.value = function (...args: any[]) {
//             var a = args[0];
//             var b = args[1];
//             var result = a + b;
//             console.log(result);
//         }
//     }
//   }

  function DecoratorF(
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>
    ){console.log("Wywołanie dekoratora: ", target, propertyKey, descriptor);}

class Decorator {
    @DecoratorF
    substraction2(a: number, b: number){
	 a = a+a+a;
        b = b+b+b;
        a = a/3;
        b = b/3;
        var result = a - b;
        console.log(result)
    }
}