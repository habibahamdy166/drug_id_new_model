let InPassword = document.querySelector(".InPassword");
let InConPassword = document.querySelector(".InConPassword");
let key = document.querySelector("main .key-con svg.key");

InConPassword.onfocus = function () {
  key.style.cssText = "top: 110px;left: -275px;transform: rotate(37deg);";
};
InPassword.onfocus = function () {
  key.style.cssText =
    "position: absolute;top:90px;left:-285px;transition: 0.5s;transform: rotate(17deg);";
};
