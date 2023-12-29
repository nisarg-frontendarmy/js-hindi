class User  {
    constructor(email , password){
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUppderCase()
    }

    set email(value) {
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}nisarg`
    }
    set password(value){
        this._password = value
    }
}

const nisarg = new User("n@nisarg,ai","abc")
console.log(nisarg.email);