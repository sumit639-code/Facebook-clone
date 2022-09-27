let btn = document.querySelector('.loginbtn');
// let input = document.querySelectorAll('input')
let en = document.querySelector('.input1');
let pa = document.querySelector('.input2');
let mark = document.querySelectorAll('.red')
function check(){
    mark[0].style.display="block";
    mark[1].style.display="block";
    // if(en.value == '' || pa.value == ''){
    //     alert("fill the empty boxes")
    // }
    // else{
    //     alert("success")
    // }
    // console.log(en.value,pa.value)
    email(en.value)
    password(pa.value)
    
}

function email(name){
    if (name.length >8){
        if (name.length <= 10){
            console.log("10");
            mark[0].style.display="*try again";
        }
        else{
            mark[0].style.display="none";
        }
    }
    else if(name == ''){
        mark[0].innerHTML = "*Enter Email or password"
    }
    else{
        mark[0].innerHTML="*it feels like this is not your account"
    }
}
function password(pass){
    if(pass == ''){
        mark[1].innerHTML="*please enter a password"
    }
    else if(pass.length <8){
        mark[1].innerHTML="*please make the password above 8 letters"
    }
    else{
        mark[1].style.display = "none";
    }
}