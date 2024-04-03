let btn_back = document.querySelector(".back");
let btn_show = document.querySelector(".toggle-nav");
let btn_close = document.querySelector(".close");

btn_back.onclick = function () {
  document.querySelector("aside").classList.toggle("open");
  document.querySelectorAll("aside ul li a").forEach((c) => {
    c.classList.toggle("open");
  });
  // document.querySelector('.arrow').classList.toggle('d-none')
  // document.querySelector('.bars').classList.toggle('d-none')
};

btn_show.onclick = function () {
  document.querySelector("aside").classList.remove("close");
  this.classList.add("d-none");
};
btn_close.onclick = function () {
  document.querySelector("aside").classList.add("close");
  btn_show.classList.remove("d-none");
};

let cases = document.querySelectorAll('.cases .case');
let btn_play = Array.from(document.querySelectorAll(".cases .case .play"));

for(let i =0;i<btn_play.length;i++){
    btn_play[i].onclick = function(){
        document.querySelector(".artist").innerHTML = cases[i].children[1].innerHTML;
        // console.log(btn_play[i])
        window.scrollTo(0, document.body.scrollHeight);
    }
}
