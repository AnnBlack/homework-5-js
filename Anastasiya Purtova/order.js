(function() {
	let orderHamburger = {
		size: 'SIZE_SMALL',
		stuffing: 'STUFFING_CHEESE',
	}
	let orderSalad = {
		type: 'CAESAR',
		amount: 200
	}
	let orderDrinks = {
		drinksType: 'COLA'
	}

	class Order {
		constructor(items) {
			this.items = items;
			this.init();
    }

	init() { // добавить элемент из меню
    this.addPosition();
		this.calculateTotalPrice();
		this.calculateTotalCalories();
	}

	addPosition() {

		let size = orderHamburger.size;
		let stuffing = orderHamburger.stuffing;
		this.hamburger = new menu.hamburger(size, stuffing);
		console.log(this.hamburger);

		let type = orderSalad.type;
		let amount = orderSalad.amount;
		this.salad = new menu.salad(type, amount);
		console.log(this.salad);

		let drinksType = orderDrinks.drinksType;
		this.drinks = new menu.drinks(drinksType);
		console.log(this.drinks);
	}

	deletePosition() { // удалить элемент из заказа

	}

	confirmOrder() { // подтвердить заказ - редактировать нельзя
		this.items = Object.freeze(items);
		console.log('Order is confirmed');
	}

	calculateTotalPrice() { // рассчитать всю цену
		let totalPrice = 0;
		totalPrice = this.hamburger.price + this.salad.price + this.drinks.price;
		console.log('Total order price: ' + totalPrice);
	}

	calculateTotalCalories() { // рассчитать все калориi
		let totalCalories = 0;
		totalCalories = this.hamburger.calories + this.salad.calories + this.drinks.calories;
		console.log('Total calories: ' + totalCalories);
	}

}
window.menu.order = Order;
})();
