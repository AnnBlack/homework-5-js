Hamburger.SIZE_SMALL = {
	name: 'small',
	price: 50,
	calories: 20,
}

Hamburger.SIZE_LARGE = {
	name: 'large',
	price: 100,
	calories: 40,
}

Hamburger.STUFFING_CHEESE = {
	name: 'cheese',
	price: 10,
	calories: 20,
}

Hamburger.STUFFING_SALAD = {
	name: 'salad',
	price: 20,
	calories: 5,
}

Hamburger.STUFFING_POTATO = {
	name: 'potato',
	price: 15,
	calories: 10,
}

function Hamburger(size, stuffing) {
  this.title = 'Hamburger';
  this.size = size;
  this.stuffing = stuffing;
  this.price = this.getPrice();
  this.calories = this.getCalories();
}

Hamburger.prototype = Object.create(Menu.prototype);
Hamburger.constructor = Hamburger;

Hamburger.prototype.getStuffing = function() {
  return this.stuffing;
}

Hamburger.prototype.getSize = function() {
  return this.size;
}

Hamburger.prototype.getPrice = function() {
  var sumPrice = 0;
  for(var i = 0; i < this.stuffing.length; i++) {
    sumPrice += this.stuffing[i].price;
  }
  return sumPrice + this.getSize().price;
}

Hamburger.prototype.getCalories = function() {
  var sumCalories = 0;
  for(var i = 0; i < this.stuffing.length; i++) {
    sumCalories += this.stuffing[i].calories;
  }
  return sumCalories + this.getSize().calories;
}
