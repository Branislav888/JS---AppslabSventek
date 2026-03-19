let element = document.getElementById("titel");
console.log(element);

let pocetKlikov = 0;
element.textContent = pocetKlikov;

let btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click" , function () {
    console.log("Klik")
    element.textContent = ++pocetKlikov;

});

let secretBtn = document.getElementById("secretBtn");

secretBtn.addEventListener("click", function() {
    if  (secret.visible == "none")
        secret.visible = "block";
    else
        secret.style.display = "none";
});

