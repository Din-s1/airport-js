const DEFAULT_CAPACITY = 1; // TODO: Remove global constant

  function Airport(capacity = DEFAULT_CAPACITY) {
    this.hangar = [];
    this.capacity = capacity;
}

Airport.prototype.land = function(plane, weather) {
  if (this._isStormy(weather)) {
    return "Too stormy to land";
  }

  if (this.hangar.length >= this.capacity) {
    return "Airport Full";
  } else {
    this.hangar.push(plane);
    return "landed";
  }
};

Airport.prototype.takeOff = function(plane, weather) {
  if (this._isStormy(weather)) {
    return "Too stormy to take off";
  }
  return "taken off";
};

Airport.prototype._isStormy = function(weather) {
  return weather === "stormy"
};
