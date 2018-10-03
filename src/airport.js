const DEFAULT_CAPACITY = 1;

function Airport(capacity = DEFAULT_CAPACITY, weather = new Weather()) {
    this.hangar = [];
    this.capacity = capacity;
    this.weather = weather
}

Airport.prototype.land = function(plane, weather) {
  if (this._isStormy(weather)) {
    throw new Error("Too stormy to land");
  }

  if (this.hangar.length >= this.capacity) {
    throw new Error("Airport Full");
  } else {
    this.hangar.push(plane);
    return "landed";
  }
};

Airport.prototype.takeOff = function(plane, weather) {
  if (this._isStormy(weather)) {
    throw new Error("Too stormy to take off");
  }
  return plane + " taken off";
};

Airport.prototype._isStormy = function(weather) {
  return weather === "stormy"
};
