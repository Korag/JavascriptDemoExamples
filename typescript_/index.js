"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Napisz funkcję implementującą licznik (każde uruchomienie +1) z wykorzystaniem var i let
var counter = 0;
var counter2 = 0;
function SayHello() {
    console.log("Hello");
    counter++;
    counter2++;
}
SayHello();
console.log(counter);
console.log(counter2);
//Napisz funkcję ze zmienną liczbą atrybutów (operator …). Wynikiem funkcji jest suma parametrów.
function Sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var singlenumber = numbers_1[_a];
        sum += singlenumber;
    }
    console.log(sum);
}
Sum(1, 2, 3);
// Zdefiniuj po jednym przykładzie zmiennych dostępnych w typescript.
// Boolean
var bool_ = false;
// Number
var int_ = 33;
var double_ = 7.5;
// String
var string_ = "PzwJS";
// Array
var array_ = [33, 28, 11];
// Tuple
var tuple_;
tuple_ = [7, 'PzwJS', .777, 77];
// Enum
var Enum_;
(function (Enum_) {
    Enum_[Enum_["bad"] = 0] = "bad";
    Enum_[Enum_["average"] = 1] = "average";
    Enum_[Enum_["awesome"] = 2] = "awesome";
})(Enum_ || (Enum_ = {}));
;
var grade = Enum_.awesome;
// Any
var any_ = [341, 'Supervisor', true];
// Void
function voidFunction(msg) {
    console.log(msg);
}
// Null or undefined
var undef_ = undefined;
var null_ = null;
var arrayOfGrades = ['bad', 'average', 'awesome'];
console.log(arrayOfGrades);
var arrayOfGrades2 = ['bad', 'average', 'awesome'];
var arrayOfNumbers = [25, 3, 2];
console.log(arrayOfGrades2);
console.log(arrayOfNumbers);
var names;
names = ["John", "Sam"];
console.log(names);
names = "Darren";
console.log(names);
// Never
function ErrorException(message) {
    throw new Error(message);
}
//Object
function Create(o) {
    console.log(o);
}
Create({ property: 0 });
function SayHelloToUser(user) {
    return "Welcome, " + user.firstName + " " + user.lastName + " " + user.email + "\n    Your content " + user.content + "\n    ";
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
var str = SayHelloToUser(TestUser);
console.log(str);
str = SayHelloToUser(TestUser2);
console.log(str);
//Zdefiniuj klasę car, oraz 3 obiekty będące jej instancjami.
// Dodaj do klasy konstruktor oraz funkcję wyświetlającą opis obiektu.
var Car = /** @class */ (function () {
    function Car(make_, model_, version_, engineSize_, horsePower_) {
        this.make_ = make_;
        this.model_ = model_;
        this.version_ = version_;
        this.engineSize_ = engineSize_;
        this.horsePower_ = horsePower_;
        this.make = make_;
        this.model = model_;
        this.version = version_;
        this.engineSize = engineSize_;
        this.horsePower = this.horsePower_;
    }
    Car.prototype.printData = function () {
        console.log("Dane pojazdu: " + this.make + "  " + this.model + "  " + this.version + "\n              " + this.engineSize + " ,  " + this.horsePower);
    };
    return Car;
}());
var car1 = new Car('VW', 'Passat', 'B5', 1900, 90);
var car2 = new Car('Mercedes-Benz', 'C', 'W124', 2200, 136);
var car3 = new Car('BMW', '3', 'E90', 2000, 177);
car1.printData();
car2.printData();
car3.printData();
//  Zdefiniuj klasę truck dziedzicząca z klasy pojazd. Skorzystaj z operatora super.
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make_, model_, version_, engineSize_, horsePower_) {
        var _this = _super.call(this, make_, model_, version_, engineSize_, horsePower_) || this;
        _this.make_ = make_;
        _this.model_ = model_;
        _this.version_ = version_;
        _this.engineSize_ = engineSize_;
        _this.horsePower_ = horsePower_;
        return _this;
    }
    return Truck;
}(Car));
// Przerób klasy car i truck do postaci modułu – zaimportuj klasy.
// import {Car} from "./node_modules/car"
// import {Truck} from "./node_modules/car"
// var car1 = new Car('VW','Passat','B5',1900,90);
// car1.printData();
// var truck1 = new Truck('BMW','3','E90',2000,177);
// truck1.printData();
// Wykorzystaj await/promise do zaimplementowania funkcji asynchronicznej
function resolveAfterSeconds(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
function substraction(a, b) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    a = a + a + a;
                    return [4 /*yield*/, resolveAfterSeconds(2000)];
                case 1:
                    _a.sent();
                    b = b + b + b;
                    return [4 /*yield*/, resolveAfterSeconds(2000)];
                case 2:
                    _a.sent();
                    a = a / 3;
                    return [4 /*yield*/, resolveAfterSeconds(2000)];
                case 3:
                    _a.sent();
                    b = b / 3;
                    return [4 /*yield*/, resolveAfterSeconds(2000)];
                case 4:
                    _a.sent();
                    result = a - b;
                    console.log(result);
                    return [2 /*return*/];
            }
        });
    });
}
substraction(10, 5);
// Zaimplementuj funkcję w postaci „strzałek”
var performUpload = function (imgStatus) {
    return new Promise(function (resolve) {
        console.log("Status: " + imgStatus);
        setTimeout(function () {
            resolve({ imgStatus: imgStatus });
        }, 1000);
    });
};
performUpload('uploading...')
    .then(function (res) {
    return performUpload('compressing...');
})
    .then(function (res) {
    return performUpload('transferring...');
})
    .then(function (res) {
    return performUpload('Image upload completed.');
});
// Za pomocą dekoratora zmień funkcjonalność klasy lub metody (*)
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.someFunction = function () { };
    __decorate([
        processOne(),
        processTwo()
    ], Post.prototype, "someFunction");
    return Post;
}());
function processOne() {
    console.log("processOne has run");
    return function (target, propertyKey, descriptor) {
        console.log("processOne has been called");
    };
}
function processTwo() {
    console.log("processTwo has run");
    return function (target, propertyKey, descriptor) {
        console.log("processTwo has been called");
    };
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
function DecoratorF(target, propertyKey, descriptor) { console.log("Wywołanie dekoratora: ", target, propertyKey, descriptor); }
var Decorator = /** @class */ (function () {
    function Decorator() {
    }
    Decorator.prototype.substraction2 = function (a, b) {
        a = a + a + a;
        b = b + b + b;
        a = a / 3;
        b = b / 3;
        var result = a - b;
        console.log(result);
    };
    __decorate([
        DecoratorF
    ], Decorator.prototype, "substraction2");
    return Decorator;
}());
