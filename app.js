const colors = ["green", "red", "grey", "maroon", "blue", "yellow", "purple", "pink", "orange", "black", "white", "brown"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const nav = document.querySelector(".nav-btn");

btn.addEventListener('click', function (){

    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

nav.addEventListener('click', function(){
    document.getElementById("nav-btn-id").style.color = "#ff0000"
});


function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}