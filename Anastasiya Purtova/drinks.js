(function() {
  const COLA = {
    price: 50,
    calories: 40
  }

  const COFFEE = {
    price: 80,
    calories: 20
  }

  class Drinks {
    constructor(drinksType) {
      this.drinksType = drinksType;
      this.calculatePrice();
      this.calculateCalories();
    }

    calculatePrice() {
      if(this.drinksType === 'COLA') {
        this.price = COLA.price;
      } else if(this.drinksType === 'COFFEE') {
        this.price = COFFEE.price;
      } else {
        console.log('You could add some drinks');
      }
      return this.price;
    }

    calculateCalories() {
      if(this.drinksType === 'COLA') {
        this.calories = COLA.calories;
      } else if(this.drinksType === 'COFFEE') {
        this.calories = COFFEE.calories;
      } else {
        console.log('You could add some drinks');
      }
      return this.calories;
    }
  }
  window.menu.drinks = Drinks;
})();
