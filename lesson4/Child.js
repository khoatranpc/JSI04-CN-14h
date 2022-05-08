import { Cars } from './Cars.js';
class Child extends Cars {
    constructor(id, type, name, weight, color, model, price) {
        super(id, type, name, weight, color);
        this.model = model;
        this.Price = price
    }
    get price() {
        return this.Price;
    }
    set price(propPrice) {
        this.Price = propPrice
    }

}
let mode1 = new Child(1, "Model 1999s", "Lexus", 100, "white", "PreHistoric", "1999.12$");
console.log(mode1.Price);
// module