function Order() {
  this.items = [];
  this.paidStatus = false;
}

Order.prototype.paidStatus = function() {
  return this.paidStatus;
}

Order.prototype.getItems = function() {
  return this.items;
}

Order.prototype.addPosition = function(...args) {
  if (!this.paidStatus) {
    this.items.push(...args);
  } else {
    return 'The order have been paid'
  }
}

Order.prototype.deletePosition = function(index) { // удалить элемент из заказа
  if (!this.paidStatus) {
    var itemIndex = index - 1;
    this.getItems().splice(itemIndex, 1);
  } else {
    return 'The order have been paid'
  }
}

Order.prototype.calculatePrice = function() { // рассчитать всю цену
  var currentOrder = this.getItems();
  var sumPrice = 0;
  if (currentOrder.length > 0) {
    for (var i = 0; i < currentOrder.length; i++) {
      sumPrice += currentOrder[i].price;
    }
  }
  return sumPrice;
}

Order.prototype.calculateCalories = function() { // рассчитать все калориi
  var currentOrder = this.getItems();
  var sumCalories = 0;
  if (currentOrder.length > 0) {
    for (var i = 0; i < currentOrder.length; i++) {
      sumCalories += currentOrder[i].calories;
    }
  }
  return sumCalories;
}

Order.prototype.confirmOrder = function() { // подтвердить заказ - редактировать нельзя
  this.paidStatus = true;
  Object.freeze(this.items);
}
