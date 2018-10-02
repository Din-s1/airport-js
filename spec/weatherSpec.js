describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  // spyOn(weather, "isStormy").and.returnValue(9);
  spyOn(Math, "random");//.and.returnValue(9);

  describe("#isStormy", function() {
    it("should use Math.random", function {
    expect(Math, "random").toHaveBeenCalled();
    weather.isStormy();
    });
  });
});