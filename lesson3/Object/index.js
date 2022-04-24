// kiểu dữ liệu object
// let car = {
//     name: "huyndai",
//     weight: 850,
//     color: "",
//     move: () => {
//         console.log('moving!');
//     },
//     toggleLight: (a, b) => {
//         console.log(a + b);
//     },
//     showInfo: function () {
//         console.log(this.name  + " " + this.color);
//     },
//     set setColor(color){
//         this.color = color;
//     },
//     get getColor(){
//         console.log(this.color);
//     }
// }


// Model: là mô hình đối tượng
// function Car(name, weight, color) {
//     this.name = name;
//     this.weight = weight;
//     this.color = color;
//     this.ShowInfo = () => {
//         console.log(this.name);
//     }
// }

// let Mec = new Car("Mecxedes", 100, "black");

// let XichLo = new Car("Xích loooo",50,"brown");
// XichLo.ShowInfo();

// class


//constructor: là 1 hàm khởi tạo chuyên biệt cho 1 lớp
class Car {
    constructor(name, weight, color) {
        this.name = name;
        this.weight = weight;
        this.color = color;
    }
    moving() {
        console.log('Boc Dau` !');
    }
}

let Mec = new Car("Mecxeded", 180, "black");
Mec.moving();

// ứng dụng của đối tượng: sẽ khởi tạo ra 1 mô hình đối tượng, có thể tái sử dụng, thực hiện tạo mới 1 đối tượng nhanh chóng
// tìm hiểu thêm trên youtube

// buổi tới: các kỹ thuật của lập trình hướng đối tượng