describe("Feature Test:", function() {
  let plane;
  let airport;
  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it("planes can be instructed to land", function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});
