Salad.CAESAR = {
  name: 'Caesar',
	price: 100,
	calories: 20,
}

Salad.OLIVIE = {
	name: 'Olivie',
	price: 50,
	calories: 80,
}

function Salad(type, weight) {
  this.title = 'Salad';
  this.type = type;
  this.weight = weight > 100 ? weight : 100;
  this.price = this.getPrice();
  this.calories = this.getCalories();
}

Salad.prototype = Object.create(Menu.prototype);
Salad.constructor = Salad;

Salad.prototype.getType = function() {
  return this.type;
}

Salad.prototype.getWeight = function() {
  return this.weight;
}

Salad.prototype.getPrice = function() {
  return this.type.price * this.getWeight() / 100;
}

Salad.prototype.getCalories = function() {
  return this.type.calories * this.getWeight() / 100;
}
