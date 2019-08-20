"use strict";

class Plane {
  constructor() {}

  land(airport) {
    airport.clearForLanding(this);
  }
}
