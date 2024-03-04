"use strict";
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - ${this.price} e`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
    }
}
function printMenuItem(item) {
    console.log(item.details);
}
const NewPizza = new Pizza('cesnakine', 25);
printMenuItem(NewPizza);
//# sourceMappingURL=pizzaProject.js.map