class Plane {
  constructor(name) {
    this.name = name;
    this.flying = true;
  }

  land(plane) {
    this.flying = false;
  }
}
