describe("Airport", function () {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe("#land", function() {
    // As an air traffic controller
    // So I can get passengers to a destination
    // I want to instruct a plane to land at an airport
    it("should allow a plane to land at an airport", function() {
      expect(airport.land("plane")).toEqual('landed')
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when weather is stormy
    it("should prevent a plane to land when weather is stormy", function() {
      // expect{airport.land("plane, stormy")}.toThrowError('Too stormy to land')
      expect(function() { airport.land("plane", "stormy") } ).toThrowError('Too stormy to land')
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent landing when the airport is full
    it("should prevent a plane from landing when the airport is full", function() {
      airport.land("plane");
      expect(function() { airport.land("plane") } ).toThrowError('Airport Full');
    });
  });

  describe("#takeOff", function() {
    // As an air traffic controller
    // So I can get passengers on the way to their destination
    // I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
    it("should allow a plane to take off from an airport", function() {
      expect(airport.takeOff("plane")).toEqual('taken off')
    });

    // As an air traffic controller
    // To ensure safety
    // I want to prevent takeoff when weather is stormy
    it("should prevent take off when weather is stormy", function() {
      expect(function() { airport.takeOff("plane", "stormy") } ).toThrowError('Too stormy to take off')
    });
  });

  describe("#capacity", function() {
    // As the system designer
    // So that the software can be used for many different airports
    // I would like a default airport capacity that can be overridden as appropriate
    it("it should have a default airport capacity equal to 1", function() {
      expect(airport.capacity).toEqual(1)
    });

    it("the default capacity can be overridden", function() {
      var airport = new Airport(2);

      expect(airport.capacity).toEqual(2)
    });
  });
});
