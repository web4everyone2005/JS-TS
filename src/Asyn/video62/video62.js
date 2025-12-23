console.log("video 62");

const response = fetch("http://localhost:8000/users")

response
    .then(res => res.json())  // then 1: res = response object, goi res.json() tra ve Promise
    .then(data => console.log(data))  // then 2: data = du lieu JSON da chuyen doi xong
// Giai thich:
// 1. fetch() tra ve Promise
// 2. .then() dau: nhan response, goi res.json() de chuyen sang JSON (tra ve Promise moi)
// 3. .then() thu 2: nhan data la JSON da xu ly xong