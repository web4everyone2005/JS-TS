console.log("video 39")


const score = [10, 20, 30, 40, 50];

score.forEach((value, index) => {
    console.log(`Index ${index}: Value ${value}`);
})


const doubledScores = score.map((value, index) => {
    return value * 2;
});

console.log(doubledScores);


//filter
const highScores = score.filter((value) => {
    return value > 25;
});

console.log(highScores); 