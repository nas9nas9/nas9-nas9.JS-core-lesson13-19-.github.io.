let firstP = /^[a-zA-Z]{3,20}$/;
let secondP = /^[a-zA-Z]{3,20}$/;
let emailP = /^.\S+@[a-zA-Z]+\.[a-zA-Z]+$/;
let passP = /^\w{8,15}$/;

let form = document.sign_up;

form[0].addEventListener('change', function (){
    let testFirst = firstP.test(form[0].value);
    if(testFirst){
        this.style.border = '3px solid green';
    } else {
        this.style.border = '3px solid red';
    }

});
form[1].addEventListener('change', function (){
    let testSecond = secondP.test(form[1].value);
    if(testSecond){
        this.style.border = '3px solid green';
    } else {
        this.style.border = '3px solid red';
    }

});

form[2].addEventListener('change', function (){
    let testEmail = emailP.test(form[2].value);
    if(testEmail){
        this.style.border = '3px solid green';
    } else {
        this.style.border = '3px solid red';
    }

});
form[3].addEventListener('change', function (){
    let testPass = passP.test(form[3].value);
    if(testPass){
        this.style.border = '3px solid green';
    } else {
        this.style.border = '3px solid red';
    }

});

form[4].addEventListener('change', function(){
    if(form[4].checked){
        document.querySelector('.button').disabled = false;
    } else {
        document.querySelector('.button').disabled = true;
    }
})

form[5].addEventListener('click', function(){
    let testFirst = firstP.test(form[0].value);
    let testSecond = secondP.test(form[1].value);
    let testEmail = emailP.test(form[2].value);
    let testPass = passP.test(form[3].value);
    if(testFirst && testSecond && testEmail && testPass){
        document.querySelector('.modal').classList.remove('hide');
    } 

})

document.querySelector('.start').addEventListener('click', function(){
    form.reset();
    document.querySelector('.button').disabled = true;
    document.querySelector('.modal').classList.add('hide');
    document.querySelector('.first').style.border = 'none';
    document.querySelector('.last').style.border = 'none';
    document.querySelector('.email').style.border = 'none';
    document.querySelector('.pass').style.border = 'none';

})