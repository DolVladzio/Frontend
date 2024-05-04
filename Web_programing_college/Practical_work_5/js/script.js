var car1 = new Object();

car1.color = "Red";
car1.maxSpeed = 200;
car1.driver = new Object();

car1.driver.name = "John Doe";
car1.driver.category = "C";
car1.driver.personalLimitations = "No driving at night";

car1.tuning = true;
car1.numberOfAccidents = 0;

car1.drive = function() {
    console.log("I am not driving at night");
};

car1.drive();
// ===============================
var car2 = {
    color: "Blue",
    maxSpeed: 180,
    driver: {
        name: "Jane Smith",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2,
    
    drive: function() {
        console.log("I can drive anytime");
    }
};

car2.drive();
// ================================
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        var drivingStatus = this.driver.nightDriving ? "drives at night" : "does not drive at night";
        console.log(`Driver ${this.driver.name} ${drivingStatus} and has ${this.driver.experience} years of experience`);
    }
};

var truck1 = new Truck("Red", 5000, 60, "Volvo", "XC90");

truck1.AssignDriver("John Doe", true, 10);

console.log("Trip for truck1:");
truck1.trip();

var truck2 = new Truck("Blue", 6000, 70, "MAN", "TGS");

truck2.AssignDriver("Jane Smith", false, 5);

console.log("\nTrip for truck2:");
truck2.trip();
// =================================


