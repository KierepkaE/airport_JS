"use strict";
describe("Airport", function() {
  let airport;
  let plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy("plane", ["land"]);
  });

  it("has no planes by default", () => {
    expect(airport.planes()).toEqual([]);
  });

  it("can clear the planes for landing", () => {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});
