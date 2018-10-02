function Airport() {
  this.hangar = [];
};

Airport.prototype.land = function(plane, weather) {

  if (weather === "stormy") {
    return "Too stormy to land";
  }

  if (this.hangar.length >= 1) {
    console.log('airport full')
    return "Airport Full";
  } else {
    console.log('landed')
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