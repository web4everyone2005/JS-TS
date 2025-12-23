console.log("This is video 52.js");

const myBtn = document.getElementById("myBtn");
const myText = document.getElementById("myText");
const myBtn2 = document.getElementById("myBtn2");

myBtn.addEventListener("click", () => {
    myText.innerText = "Messi > Cristiano Ronaldo";
    myText.style.color = "blue";
    myText.classList.add("text-large"); 
})

myBtn2.addEventListener("click", () => {
    myText.innerText = "Video 52";
    myText.style.color = "black";
    myText.classList.remove("text-large");
})