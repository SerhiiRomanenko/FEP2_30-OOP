class Hamburger {
    constructor(size, stuffing) {
        this.price = size.price + stuffing.price;
        this.calories = stuffing.calories + stuffing.calories;
    }
    static SIZE_BIG = {
        price: 100,
        calories: 40
    }
    static SIZE_SMALL = {
        price: 50,
        calories: 20
    }
    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    }
    static STUFFING_SALAD = {
        price: 20,
        calories: 5
    }
    static STUFFING_POTATO = {
        price: 15,
        calories: 10
    }
    static TOPPING_SAUCE = {
        price: 15,
        calories: 0
    }
    static TOPPING_MAYO = {
        price: 20,
        calories: 5
    }
    addTopping(topping) {
        this.price += topping.price;
        this.calories += topping.calories;
    }
    calculateCalories() {
        return this.calories;
    }
    calculatePrice() {
        return this.price;
    }
}

// маленький гамбургер із начинкою із сиру
const hamburger1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка з майонезу
hamburger1.addTopping(Hamburger.TOPPING_MAYO);
// Запитаємо скільки там калорій
console.log("Calories: " + hamburger1.calculateCalories());
// скільки коштує
console.log("Price: " + hamburger1.calculatePrice());
// я тут передумав і вирішив додати ще приправу
hamburger1.addTopping(Hamburger.TOPPING_SAUCE);
// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger1.calculatePrice());
console.log(hamburger1);
