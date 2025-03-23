'use strict';

class Vehicle {
    constructor(make,model, year , mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    }
    drive(distance) {
        return this.mileage += distance;
    }
    info() {
        return ` ${this.year} ${this.make} ${this.model} with  ${this.mileage} miles `;
    }
    service() {
        this.mileage = 0;
        return ` ${this.make} ${this.model} has been serviced`;
    }
};

class Car extends Vehicle {
    constructor(make, model, year , mileage, numDoors ) {
        super (make, model, year , mileage)
            this.numDoors = numDoors;
    }
    info() {
       return `${super.info()} and  ${this.numDoors} doors`;
    }
    openTrunk() {
        return `The trunk is open`;
    }
};

class Truck extends Vehicle {
    constructor(make, model, year , mileage, cargoCapacity) {
        super(make, model, year , mileage)
        this.cargoCapacity = cargoCapacity;
    }
    info() {
        return `${super.info()} and ${this.cargoCapacity} kg cargo capacity`;
    }
    loadCargo(weight) {
        if (weight <= this.cargoCapacity) {
            return `Cargo loaded with ${weight} tons.`
        } else {
            return `Cannot load ${weight} tons of cargo because exceeds capacity of ${this.cargoCapacity} tons. `
        }
    }
}

const myCar = new Car('Range Rover', 'Velar', 2024, 50000, 4);
console.log(myCar.info());
console.log(myCar.drive(150));
console.log(myCar.info());
console.log(myCar.openTrunk());
console.log(myCar.service());



const myTruck = new Truck('Ford', 'F-150', 2018, 30000, 1000);
console.log(myTruck.info());
console.log(myTruck.drive(200));
console.log(myTruck.loadCargo(100));