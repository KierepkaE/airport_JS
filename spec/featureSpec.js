describe("Feature Test: ", function() {
  let plane;
  let airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  describe("under normal conditions", () => {
    beforeEach(function() {
      spyOn(Math, "random").and.returnValue(0);
    });

    it("planes can be instructed to land at an airport", () => {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it("planes can be instructed to takeoff", () => {
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane);
    });
  });

  describe("under stormy conditions", () => {
    it("blocks takeoff when weather is stormy", function() {
      spyOn(Math, "random").and.returnValue(0);
      plane.land(airport);
      spyOn(airport._weather, "isStormy").and.returnValue(true);
      expect(function() {
        plane.takeoff();
      }).toThrowError("can not take off");
      expect(airport.planes()).toContain(plane);
    });

    it("blocks landing when weather is stormy", () => {
      spyOn(Math, "random").and.returnValue(1);
      expect(function() {
        plane.land(airport);
      }).toThrowError("can not land");
      expect(airport.planes()).toEqual([]);
    });
  });
});
