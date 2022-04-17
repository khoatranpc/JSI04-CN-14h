// hàm ES6 với array cơ bản
// lồng kiến thức mảng và object
// thực hiện tương tác với localStorage

// các hàm được hỗ trợ, bản chất cách hoạt động là sử dụng vòng lặp | thường sẽ là vòng for; for each

// let arr = [4, 3, 1, 65, 4, 8, 4, 6, 123, 886, 121, 65, 23];

// hàm map
// đếm số chẵn

// let count = 0;
// let mapArr = arr.map((item, index) => {
//     return "Khoa đẹp trai"
// });
// console.log(mapArr);

// console.log(`Số phần tử chẵn trong mảng arr trên là: ${count}`);

// hàm filter

// trả ra 1 cái mảng mới, ứng với điều kiện lọc

// let filArr = arr.filter((item, index) => {
//     return (item > 100) ? item : null;
// })
// console.log(filArr);

// kiểu dữ liệu object

// let NgocTrinh = {
//     "name": "Ngọc Trinh",
//     "height": 165,
//     "place": "Việt nam"
// }
// let DamVinhHung = {
//     name: "Đàm Vĩnh Biệt",
//     height: 160,
//     place: "Việt nam in việt nam"
// }
// let arr = [NgocTrinh, DamVinhHung];
//in ra màn hình người mà có height > 160
// arr.filter((item, index) => {
//     return (item.height > 160) ? console.log(item.name) : '';
// })


// localStorage
// là 1 dạng csdl local(trên trình duyệt máy tính của mình) có giới hạn
// trong trường hợp, chưa có localStorage thì dùng set sẽ tự động thêm

// localStorage.setItem('name', 'Khoa đẹp trai');

// localStorage.setItem('name',"Phú trọc Lê");

// localStorage.clear();

// let getNameLS = localStorage.getItem('name');
// console.log(getNameLS);


// let arr = [4, 3, 1, 65, 4, 8, 4, 6, 123, 886, 121, 65, 23];

// localStorage.setItem('arr',JSON.stringify(arr));

// let parseTypeof = JSON.parse(localStorage.getItem('arr'));

// console.log(parseTypeof);

// tạo 1 form đăng ký, lưu trữ thông tin vào localStorage

// mỗi lần thực hiện change Input, sẽ lập tức tạo 1 object là tài khoản và có thông tin đã nhập

let acc = {
    account: "",
    password: ""
}

let arrDomInput = document.querySelectorAll('input');

let addArrInput = [...arrDomInput];

addArrInput.map((item, index) => {
    item.onchange = (e) => {
        if (e.target.name == "account") {
            acc["account"] = e.target.value;
        } else {
            acc["password"] = e.target.value;
        }
        console.log(acc);
    }
})


let submitForm = document.querySelector('form');

submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('acc', JSON.stringify(acc));
})

// bài tập tạo một form đăng ký, thực hiện đăng ký tài khoản
// lưu tài khoản đã đăng ký vào 1 mảng, lưu mảng này vào localStorage, điều kiện: các tài khoản phải khác nhau | khác nhau về account name


