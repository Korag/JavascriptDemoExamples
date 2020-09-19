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
exports.__esModule = true;
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
        console.log("Dane pojazdu: " + this.make + "  " + this.model + "  " + this.version + "\n          " + this.engineSize + " ,  " + this.horsePower);
    };
    return Car;
}());
exports.Car = Car;
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
exports.Truck = Truck;
