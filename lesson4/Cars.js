console.log(`Connected!`);
//-------
export class Cars {
    constructor(id, type, name, weight, color) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.weight = weight;
        this.color = color;
    }
    drive() {
        console.log(`Car ${this.name} is running!`);
    }
    brake() {
        console.log(`Car ${this.name} is braking!`);
        let count = 3;
        let idInterval = setInterval(() => {
            console.log(count);
            count -= 1;
            if (count == 0) {
                this.drive();
                clearInterval(idInterval);
            }
        }, 1000)
    }
}

// let Toyota = new Cars(1, "Model 1980s", "Toyota", 800, "Black");
// let Huyndai = new Cars(2, "Model 2000", "huydai", 800, "White");


// tính chất của lập trình hướng đối tượng:
// 1: kế thừa
// 2: Đa hình
// 3: Đóng gói: setter, getter
// 4: Trừu tượng

// kế thừa

class Model extends Cars {
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

let mode1 = new Model(1, "Model 1999s", "Lexus", 100, "white", "PreHistoric", "1999.12$");
