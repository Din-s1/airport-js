describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });


  describe("#isStormy", function() {
    it("should return true when Math.random is 9", function() {
      spyOn(Math, "random").and.returnValue(0.9);
      expect(weather.isStormy()).toEqual(true);
    });

    it("should return true when (Math.random * 10) is 1", function () {
      spyOn(Math, "random").and.returnValue(0.1);
      expect(weather.isStormy()).toEqual(false);
    });
  });
});
