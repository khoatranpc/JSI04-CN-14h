console.log(`Connected!`);
// 
class RegisterForm {
    constructor() {
        this.rootHtml = document.createElement("div");
        this.h1 = document.createElement("h1");
        this.form = document.createElement("form");
        this.spanEmail = document.createElement("span");
        this.spanPassword = document.createElement("span");
        this.inputEmail = document.createElement("input");
        this.inputPassword = document.createElement("input");
        this.button = document.createElement("button");
    }
    createAttributes() {
        this.rootHtml.className = "form";
        this.h1.innerText = "Đăng ký";

        this.spanEmail.innerText = "Email";
        this.spanPassword.innerText = "Password";

        this.inputEmail.type = "email";
        this.inputEmail.name = "email";
        this.inputEmail.placeholder = "example@gmail.com";

        this.inputPassword.type = "password";
        this.inputPassword.name = "password";
        this.inputPassword.placeholder = "Type your password";

        this.button.innerText = "Đăng ký";

        this.form.addEventListener('submit', (e) => {
            this.submitForm(e);
        });

    }
    creatForm() {
        this.createAttributes();

        this.form.appendChild(this.spanEmail);
        this.form.appendChild(this.inputEmail);

        this.form.appendChild(this.spanPassword);
        this.form.appendChild(this.inputPassword);

        this.form.appendChild(this.button);

        // add form
        this.rootHtml.appendChild(this.h1);
        this.rootHtml.appendChild(this.form);
    }
    submitForm(e) {
        e.preventDefault();
        try {
            if (e.target["email"].value == '') throw new Error("Email is required!");
            if (e.target["password"].value == '' || e.target["password"].value.length <= 6)
                throw new Error("Pass is required and large 6 character!");

            let arr = [];
            if (localStorage.getItem('account')) {
                arr = JSON.parse(localStorage.getItem('account'));
            } else {
                localStorage.setItem('account', JSON.stringify(arr));
            }
            const account = {
                email: e.target["email"].value,
                password: e.target["password"].value
            }

            arr.filter((item, index) => {
                if (item.email == account.email) throw new Error("Email has already existed!")
            })

            arr.push(account);
            localStorage.setItem('account', JSON.stringify(arr));
        } catch (error) {
            alert(error.message);
        }
    }
}

let formRegister = new RegisterForm();
formRegister.creatForm();

document.querySelector('div.container').appendChild(formRegister.rootHtml);