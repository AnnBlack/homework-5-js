Drinks.COFFEE = {
	name: 'Coffee',
	price: 80,
	calories: 20,
}

Drinks.COLA = {
	name: 'Coke',
	price: 50,
	calories: 40,
}

function Drinks(type) {
  this.title = 'Drinks';
  this.type = type;
  this.price = this.getPrice();
  this.calories = this.getCalories();
}

Drinks.prototype = Object.create(Menu.prototype);
Drinks.constructor = Drinks;

Drinks.prototype.getDrink = function() {
  return this.type;
}

Drinks.prototype.getPrice = function() {
  return this.type.price;
}

Drinks.prototype.getCalories = function() {
  return this.type.calories;
}
