console.log("lab 04")

const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if(email.value ==="nguyentantrung30@gmail.com" && password.value==="123456"){
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        alert("Login successful");
        window.location.href = "sucess.html";
    }else if(email.value !== "nguyentantrung30@gmail.com"){
        alert("Login failed");
        email.style.borderColor = "red";
    }else{
        alert("Login failed");
        password.style.borderColor = "red";
    }
});