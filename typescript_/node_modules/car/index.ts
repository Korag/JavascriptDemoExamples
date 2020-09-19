export class Car {
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

export class Truck extends Car {

    constructor(public make_ : string, public model_ : string, public version_ : string, public engineSize_ : number, public horsePower_ : number) 
    {
        super(make_, model_, version_, engineSize_, horsePower_);
    }
    
}