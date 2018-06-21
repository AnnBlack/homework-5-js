(function() {
  const SIZE_SMALL = {
    price: 50,
    calories: 20
  }
  const SIZE_LARGE = {
    price: 100,
    calories: 40
  }
  const STUFFING_CHEESE = {
      price: 10,
      calories: 20
    }
  const STUFFING_SALAD = {
      price: 20,
      calories: 5
  }
  const STUFFING_POTATO = {
      price: 15,
      calories: 10
  }

  class Hamburger {

    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.calculatePrice();
      this.calculateCalories();
    }

    calculatePrice() {
      if(this.size === 'SIZE_SMALL') {
        this.price = SIZE_SMALL.price;
      } else if(this.size === 'SIZE_LARGE') {
        this.price = SIZE_LARGE.price;
      } else {
        console.log('Please, choose a size');
      }
      let stuffingPrice = 0;
      if(this.stuffing === 'STUFFING_CHEESE') {
        stuffingPrice = STUFFING_CHEESE.price;
      } else if(this.stuffing === 'STUFFING_SALAD') {
        stuffingPrice = STUFFING_SALAD.price;
      } else if(this.stuffing === 'STUFFING_POTATO') {
        stuffingPrice = STUFFING_POTATO.price;
      } else {
        console.log('Please, now choose any stuffing');
      }
      return this.price + stuffingPrice;
    }

    calculateCalories() {
      if(this.size === 'SIZE_SMALL') {
        this.calories = SIZE_SMALL.calories;
      } else if(this.calories === 'SIZE_LARGE') {
        this.calories = SIZE_LARGE.calories;
      } else {
        console.log('Please, choose a size');
      }
      let stuffingCalories = 0;
      if(this.stuffing === 'STUFFING_CHEESE') {
        stuffingCalories = STUFFING_CHEESE.calories;
      } else if(this.stuffing === 'STUFFING_SALAD') {
        stuffingCalories = STUFFING_SALAD.calories;
      } else if(this.stuffing === 'STUFFING_POTATO') {
        stuffingCalories = STUFFING_POTATO.calories;
      } else {
        console.log('Please, choose any stuffing');
      }
      return this.calories + stuffingCalories;
    }
  }
  window.menu.hamburger = Hamburger;
})();
