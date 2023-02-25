function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculateCost = function() {
  var cost = 0;
  switch (this.size) {
    case "small":
      cost = 8;
      break;