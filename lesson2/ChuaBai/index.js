console.log(`Connected`);
//DOM tới thẻ form

let domForm = document.querySelector('form');

// tạo mảng lưu trữ các tài khoản

let arrayAccount = [];

if (localStorage.getItem('arrayAccount')) {
    arrayAccount = JSON.parse(localStorage.getItem('arrayAccount'));
}

domForm.onsubmit = (e) => {
    e.preventDefault();

    let accOjbect = {
        accountName: "",
        password: ""
    }

    let accountName = domForm.account.value;
    let password = domForm.password.value;

    accOjbect.accountName = accountName;
    accOjbect.password = password;
    let checkArrayAccount = JSON.parse(localStorage.getItem('arrayAccount'));

    let check = false
    checkArrayAccount.filter((item, index) => {
        if (item.accountName == accountName) {
            check = true;
        }
    })
    if (check == false) {
        arrayAccount.push(accOjbect);
        localStorage.setItem('arrayAccount', JSON.stringify(arrayAccount));
        console.log(arrayAccount);
    } else {
        console.log('Existed');
    }

}