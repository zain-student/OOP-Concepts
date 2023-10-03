function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  let speed = 0;
  let isEngineRunning = false;

  const log = (message) =>
    console.log(`${this.make} ${this.model}: ${message}`);

  this.startEngine = () => {
    isEngineRunning = true;
    log("Engine is running");
  };

  this.stopEngine = () => {
    isEngineRunning = false;
    log("Engine is stopped");
  };

  this.getSpeed = () => (isEngineRunning ? speed : 0);

  this.accelerate = (mph) => {
    if (isEngineRunning) {
      speed += mph;
      log(`Now going ${speed} mph`);
    } else {
      log("Cannot accelerate. Engine is not running");
    }
  };

  this.brake = () => {
    if (isEngineRunning && speed > 0) {
      speed -= 5;
      log(`Slowing down to ${speed} mph`);
    } else if (isEngineRunning) {
      log("Already stopped");
    } else {
      log("Cannot brake. Engine is not running");
    }
  };
}

const myCar = new Car("Toyota", "Camry", 2022);
myCar.startEngine();
myCar.accelerate(30);
myCar.brake();
myCar.stopEngine();
