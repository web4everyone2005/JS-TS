
console.log("lab 05");

const getData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    const tbody = document.querySelector("#myBody");
    data.map(user => {
        tbody.innerHTML += `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td></tr>`;
    });
}

getData();

