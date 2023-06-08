let usernameInput = document.getElementById('username-input');
let usernameError = document.getElementById('username-error');
let userBool = false;

let emailInput = document.getElementById('email-input');
let emailError = document.getElementById('email-error');
let emailBool = false;

let passwordInput = document.getElementById('password-input');
let passwordError = document.getElementById('password-error');
let passBool = false;

let conPasswordInput = document.getElementById('conpassword-input');
let conPasswordError = document.getElementById('conpassword-error');
let conPassBool = false;

let showPass = document.getElementById('show-password');
let hidePass = document.getElementById('hide-password');

let modal = document.querySelector('.modal')
let body = document.querySelector('body');
console.log(modal)
console.log(modal.classList)

let submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

let crossBtn = document.getElementById('cross-btn');

let errstyle = `.input-field:focus{
    border: 3px solid red !important;
}`
let styleSheet = document.createElement("style")
styleSheet.innerText = errstyle

//Form validation methods
usernameInput.addEventListener('input', function(){
    if(usernameInput.value.length < 3 || usernameInput.value.length > 25){
        usernameError.innerText = 'Username must be between 3 and 25 characters';
        usernameInput.style.borderColor='red';
        usernameInput.appendChild(styleSheet);
        userBool = false;
        
    }
    else{
        usernameError.innerText = ' ';
        usernameInput.style.borderColor='rgb(0, 0, 0, 0.4)';
        usernameInput.removeChild(styleSheet);
        userBool = true;

        // console.log(userBool);
        
    }
    btnFunc();
})

emailInput.addEventListener('input', function(){
    if(!emailInput.value.match('@') 
    || !emailInput.value.match('.com')){
        emailError.innerText='Invalid email address!';
        emailInput.style.borderColor='red';
        emailInput.appendChild(styleSheet);
        emailBool = false;
    }
    else{
        emailError.innerText=' ';
        emailInput.style.borderColor='rgb(0, 0, 0, 0.4)';
        emailInput.removeChild(styleSheet);
        emailBool = true;
        // console.log(emailBool);
    }
    btnFunc();
})

passwordInput.addEventListener('input', function(){
    if(passwordInput.value.length < 8 
        || Boolean(passwordInput.value.match('/[^A-Z]/'))
        || Boolean(passwordInput.value.match('/[^a-z]/'))
        || Boolean(passwordInput.value.match('/[^0-9]/'))
        || Boolean(passwordInput.value.match('/[^!@#$%^&*]/'))){
            passwordError.innerText = 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase character, 1 number and 1 special character in (!@#$%^&*)';
            passwordInput.style.borderColor='red';
            passwordInput.appendChild(styleSheet);
            passBool = false;
        }
        else{
            passwordError.innerText = '';
            passwordInput.style.borderColor='rgb(0, 0, 0, 0.4)';
            passwordInput.removeChild(styleSheet);
            passBool = true;
            // console.log(passBool);
            
        }
        btnFunc();

})

conPasswordInput.addEventListener('input', function(){
    if(conPasswordInput.value != passwordInput.value){
        conPasswordError.innerText = "The password doesn't match, please enter the password again!";
        conPasswordInput.style.borderColor='red';
        conPasswordInput.appendChild(styleSheet);
        conPassBool = false;
        console.log(conPassBool);
    }
    else{
        conPasswordError.innerText = '';
        conPasswordInput.style.borderColor='rgb(0, 0, 0, 0.4)';
        conPasswordInput.removeChild(styleSheet);
        conPassBool = true;
        // console.log(conPassBool);
        
    }
    btnFunc();
})

//Sign Up button disable
let btnFunc = () =>{
    if(userBool == true && emailBool == true && passBool == true && conPassBool == true){
        console.log('im in sign up')
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-disabled');
        submitBtn.classList.add('btn-abled');
        
    }
    else{
        submitBtn.disabled = true;
        submitBtn.classList.add('btn-disabled');
        submitBtn.classList.remove('btn-abled');
    }
}
// console.log(modal.classList)

submitBtn.addEventListener('click', function(){
    console.log('inside event modal');
    modal.style.display = 'flex';
    
})

crossBtn.addEventListener('click', function(){
    modal.style.display="none";
    location.reload();
})

console.log('above modal');
//Modal view


//Password eye toggle
hidePass.addEventListener('click', function(){
    // will have to show, so eye icon will become noeye
    showPass.classList.remove('hide');
    hidePass.classList.add('hide');
    console.log(showPass.classList);
    console.log(hidePass.classList);
    passwordInput.type="text";
    conPasswordInput.type="text";
});
showPass.addEventListener('click', function(){
    //will hide password
    hidePass.classList.remove('hide');
    showPass.classList.add('hide');
    passwordInput.type="password";
    conPasswordInput.type="password";
});

