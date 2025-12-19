

const players = ["Messi", "Ronaldo", "Neymar", "Mbappe"];

console.log(players[3]);

players[3] = "Salah";

console.log(players);

//Thêm vào cuối và đầu mảng
players.push("Kante");//thêm vào cuối mảng
players.unshift("Modric");//thêm vào đầu mảng

console.log(players);

//Xóa phần tử cuối và đầu mảng
players.pop();//xóa phần tử cuối mảng
players.shift();//xóa phần tử đầu mảng

console.log(players);


//lặp forEach
players.forEach(function(player, index){
    console.log(index + 1 + ": " + player);
});

//forEach với arrow function
players.forEach((player, index) => {
    console.log(`${index + 1}: ${player}`);
});