class Car {
  private wheels;

  private engine;

  private brakePads;

  private steeringWheel;


  public function brake() {
    this.brakePads = true;
    this.steeringWheel = "straight";
  };

  public function turnLeft() {
    this.engine = true;
    this.steeringWheel = "left";
    this.brakePads = false;
  } ;

  public function turnRight() {
    this.engine = true;
    this.steeringWheel = "right";
    this.brakePads = false;
  } ;

  public function stop() {
    this.engine = false;
    this.brakePads = true;
    this.steeringWheel = "straight";
  };

  public function drive() {
    //engine ON
    //brakes OFF
    this.engine = true;
    this.brakePads = false;
  };
    

}

const car = new Car();

