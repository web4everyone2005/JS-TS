console.log("This is video53.js");

const btn = document.getElementById("btn");
const result = document.getElementById("name");
const previousName = document.getElementById("previousName");
const prevName = localStorage.getItem("name");

if(prevName){
    previousName.innerHTML = `<b>${prevName}</b>`;
}

btn.addEventListener("click", () => {
    localStorage.setItem("name", nameFirst.value);
    document.getElementById("name").innerHTML = `<b>${nameFirst.value}</b>`
});
