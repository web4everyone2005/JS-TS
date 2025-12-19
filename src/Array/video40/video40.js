
console.log("Video 40")

const sv1 = {
    name: "Trung",
    age: 21,
    address: {
        city: "HCM",
        district: "Go Vap"
    }
}

const sv2 = {
    name: "An",
    age: 22,
    address: {
        city: "HN",
        district: "Ba Dinh"
    }
}

const students = [sv1, sv2];

// //get data
// console.log(sv1.name);
// // console.log(students);

// //set data
// sv1.name = "Khanh"
// console.log(sv1.name);

// console.log(sv1);


const person = {
    name: "Trung",
    age: 21
}

//for... in: lặp qua key của object
// for (let key in person) {
//     console.log(key, person[key]);
// }


//for... of: lặp qua value của array
// for (let value of Object.values(person)) {
//     console.log(value);
// }

//cach khac
for (let [key, value] of Object.entries(person)) {
    console.log(key, value);
}
