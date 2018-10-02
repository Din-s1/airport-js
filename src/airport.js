function Airport(capacity = 1) {
  this.hangar = [];
  this.capacity = capacity;
};

Airport.prototype.land = function(plane, weather) {
  if (weather === "stormy") {
    return "Too stormy to land";
  }

  if (this.hangar.length >= 1) {
    return "Airport Full";
  } else {
    this.hangar.push(plane);
    return "landed";
  }
};

Airport.prototype.takeOff = function(plane, weather) {
  if (weather === "stormy") {
    return "Too stormy to take off";
  }
  return "taken off";
};