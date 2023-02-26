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
      case "medium":
      cost = 10;
      break;
    case "large":
      cost = 12;
      break;
    default:
      break;
  }
  if (this.toppings.includes("cheese")) {
    cost += 1;
  }
  if (this.toppings.includes("pepperoni")) {
    cost += 2;
  }
  if (this.toppings.includes("anchovy")) {
    cost += 4;
  }
  return cost;
}

function calculateCost() {
  var toppings = [];
  var checkboxes = document.getElementsByName("toppings");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      toppings.push(checkboxes[i].value);
    }
  }