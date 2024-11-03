//import and do 3 things first (get button, function, addEventListener) , then copy paste code from firebase docs

import { app, auth, createUserWithEmailAndPassword, onAuthStateChanged, } from './firebase.js'

//validation check

function checkEmail() {

    var emailValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var email = document.getElementById('email').value;


    // Password validation


    var passwordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var password = document.getElementById('password').value;

    if (passwordValid.test(password) === true && emailValid.test(email) === true) {
        alert('Correct Information');
    }
    else if (passwordValid.test(password) === true && emailValid.test(email) === false) {

        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('email').style.backgroundColor = '#ffe7e0';

        alert('Invalid email');

    }
    else if (passwordValid.test(password) === false && emailValid.test(email) === true) {

        document.getElementById('password').style.border = '1px solid red';
        document.getElementById('password').style.backgroundColor = '#ffe7e0';

        alert('Invalid password');
    }
    else {
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('email').style.backgroundColor = '#ffe7e0';

        document.getElementById('password').style.border = '1px solid red';
        document.getElementById('password').style.backgroundColor = '#ffe7e0';

        alert('Invalid Information');
    }
}


/////////////////////////////////////////////////////
let registerBtn = document.getElementById('register');

let registerFunc = () => {

    let email = document.getElementById('email');
    let password = document.getElementById('password');

    checkEmail()

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            console.log("User register");
            gotoLogin()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("User registeration failed");
            console.log(errorMessage)
        });
}

registerBtn.addEventListener('click', registerFunc);



///////////////////////////////////////////////
let SignUp = document.getElementById('gotoSignup')
let gotoSignUp = () => {

    let reg = document.getElementById('one');
    let log = document.getElementById('two');

    console.log('hi')

    reg.style.display = 'block'
    log.style.display = 'none'

}
SignUp.addEventListener('click', gotoSignUp)

////////////////////////////////
let gotoLogin = () => {
    let reg = document.getElementById('one');
    let log = document.getElementById('two');

    reg.style.display = 'none'
    log.style.display = 'block'
}