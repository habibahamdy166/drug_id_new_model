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

let btn_addDrug = document.querySelector(".add-drug");
let btn_clear = document.querySelector(".btn-clear");
let drug_list = []
function addDrug(){
}
btn_addDrug.onclick = function () { 
  if (document.querySelector(".drug-name").value) {
    const value = document.querySelector(".drug-name").value;
    let s = document.createElement("span");
    if (!drug_list.includes(value)) {
      if(drug_list.length <= 10){
        drug_list.push(value);
        s.innerText = value;
        s.innerHTML += '<i class="fa-solid fa-check ms-2"></i>';
        document.querySelector(".drugs").appendChild(s);
        document.querySelector(".drugs").classList.add("mb-3");
      }
    } else {
      const myModal = new bootstrap.Modal("#myModal", {keyboard: false});
      let modalToggle = document.getElementById('toggleMyModal'); 
      myModal.show(modalToggle)
      myModal._dialog.children[0].children[1].innerHTML = `The item [${value}] is already added in list`;
    }
  }
 }


btn_clear.onclick = function () {
  document.querySelectorAll("form input").forEach((i) => {
    i.value = "";
  });
  document.querySelectorAll(".drugs span").forEach((s) => {
    s.remove();
  });
  document.querySelector(".drugs").classList.remove("mb-3");
};



let words = ["hello", "baby", "abracadabra", "accoutrements"];
let autocomplete = document.getElementById("autocomplete");
let search = document.querySelector(".drug-name");

search.addEventListener("keyup", () => {
  if (search.value.length > 0) {
    let input = search.value;
    autocomplete.innerHTML = input;
    let regex = new RegExp("^" + input + ".*", "i");

    for (let i = 0; i < words.length; i++) {
      if (words[i].match(regex)) {
        autocomplete.innerHTML += words[i].slice(input.length, words[i].length);
        let x = words[i];
        console.log(x.slice(input.length, x.length));
        break;
      }
    }
  }
});
search.addEventListener("keydown", (e) => {
  if (search.value.length <= 1 && e.keyCode == 8) {
    autocomplete.innerHTML = "";
  }
});
