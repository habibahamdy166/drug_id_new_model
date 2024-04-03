let InPassword = document.querySelector(".InPassword");
let InEmail = document.querySelector(".InEmail");
let key = document.querySelector(".key-off")

key.onclick = function(){
    if(InPassword.type === 'password'){
        InPassword.type = 'text'
        key.children[0].classList.replace("fa-eye", "fa-eye-slash");
    }else{
        InPassword.type = "password";
        key.children[0].classList.replace("fa-eye-slash", "fa-eye");
    }
}

InPassword.onfocus = function(){
    let key = document.querySelector("main .key-con svg.key");
    key.style.cssText = 'top: 40px;left: -275px;transform: rotate(38deg);'
}
InEmail.onfocus = function () {
  let key = document.querySelector("main .key-con svg.key");
  key.style.cssText = "position: absolute;top: 12px;left: -285px;transform: rotate(19deg);";
};
