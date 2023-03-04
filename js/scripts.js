class Pizza {
  constructor(toppings, size, price) {
    this.toppings = toppings;
    this.size = size;
    this.price = price;
  }

  calculateCost() {
    let cost = 0;
    switch (this.size) {
      case "small":
        cost += 8;
        break;
      case "medium":
        cost += 10;
        break;
      case "large":
        cost += 12;
        break;
      default:
        break;
    }
    cost += this.toppings.reduce((total, topping) => {
      switch (topping) {
        case "cheese":
          return total + 1;
        case "pepperoni":
          return total + 2;
        case "artichoke":
          return total + 3;
        case "anchovy":
          return total + 4;
        default:
          return total;
      }
    }, 0);

    return cost + this.price;
  }
}

function calculateCost() {
  const toppings = Array.from(document.getElementsByName("toppings"))
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);
  const size = document.getElementById("size").value;
  const pizza = new Pizza(toppings, size, 0);
  const cost = pizza.calculateCost();
  document.getElementById("cost").innerHTML = `Total cost: $${cost.toFixed(2)}`;
}

