describe("Weather", function() {
  let weahter;
  beforeEach(() => {
    weahter = new weahter();
  });

  it("gives stormy sometimes", () => {
    spyOn(Math, "random").and.returnValue(1);
    expect(weather.isStormy()).toBeFalsy();
  });
});
