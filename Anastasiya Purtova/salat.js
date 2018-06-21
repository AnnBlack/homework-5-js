(function() {
  let defaultAmount = 100;
  const CAESAR = {
    price: 100,
    calories: 20
  }
  const OLIVIE = {
    price: 50,
    calories: 80
  }
  class Salad {
    constructor(type, amount) {
      this.type = type;
      this.amount = amount;
      this.calculatePrice();
      this.calculateCalories();
    }

    calculatePrice() {
      if(this.type === 'CAESAR') {
        this.price = this.amount * CAESAR.price / defaultAmount;
      } else if(this.type === 'OLIVIE') {
        this.price = this.amount * OLIVIE.price / defaultAmount;
      } else {
        console.log('You could add a salad');
      }
      return this.price;
    }

    calculateCalories() {
      if(this.type === 'CAESAR') {
        this.calories = this.amount * CAESAR.calories / defaultAmount;
      } else if(this.type === 'OLIVIE') {
        this.calories = this.amount * OLIVIE.calories / defaultAmount;
      } else {
        console.log('You could add a salad');
      }
      return this.calories;
    }
  }

window.menu.salad = Salad;
})();
