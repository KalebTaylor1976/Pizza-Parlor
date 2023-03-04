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