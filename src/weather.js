function Weather() {}

Weather.prototype.isStormy = function() { // TODO: Figure out how to test
  return Math.floor(Math.random() * 10) === 9;
};